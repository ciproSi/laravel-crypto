<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use phpGPX\phpGPX;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use phpGPX\Models\GpxFile;
use App\Models\Route;
use App\Models\Activity;

class RouteController extends Controller
{
    
    public function create ()
    {
        return view('routes.create');
    }

    public function store (Request $request)
    {
        
        // TO DO: back end validation
        $this->validate($request, [
            'routeName' => 'required',
            'GPXFile' => 'required'
            
        ]);

        $route_name = $request->input('routeName');
        $original_extension = $request->file('GPXFile')->getClientOriginalExtension();

        //unique name of the gpx file based on time() and route name (url endoded) with original extension (which needs to be gpx)
        $name_to_be_saved = Str::slug($route_name) . '_' . microtime(true) . '.' . $original_extension;
        $path = $request->file('GPXFile')->storeAs('public/gpx', $name_to_be_saved);
        
        // parsing gpx file to get length and cumulative elevation
        $gpx = new phpGPX();
        $file = $gpx->load('./storage/gpx/' . $name_to_be_saved);
        $stats = $file->tracks[0]->stats->toArray();

        // saving the route to db
        $route = new Route;
        $route->name = $route_name;
        $route->url = $name_to_be_saved;
        $route->length = $stats['distance'];
        $route->elevation_gain = $stats['cumulativeElevationGain'];
        $route->save();
        $route_id = $route->id;

        return response(compact('path','stats', 'route_id'), 200)
                  ->header('Content-Type', 'application/json');
        
    }
    
    public function view ($id)
    {
        
        $route = Route::findOrFail($id);

        return response(compact('route'), 200)
                  ->header('Content-Type', 'application/json');
    }

    public function update ($id, Request $request)
    {
        
        // TO DO: validation needs to be finished!
        $this->validate($request, [
            'difficulty' => 'required | numeric',
            'routeImage' => 'required'
        ]);
        $activities = json_decode($request->input('activities'));
        $route = Route::findOrFail($id);
        $route->activities()->sync($activities);

        return response(compact('route', 'activities'), 200)
                  ->header('Content-Type', 'application/json');
    }

}
