<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use phpGPX\phpGPX;

use Illuminate\Http\Request;
use phpGPX\Models\GpxFile;
use App\Models\Route;

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
        $name_to_be_saved = urlencode($route_name) . '_' . time() . '.' . $original_extension;
        $path = $request->file('GPXFile')->storeAs('public/gpx', $name_to_be_saved);
        
        // parsing gpx file to get length and cumulative elevation
        $gpx = new phpGPX();
        $file = $gpx->load('./storage/gpx/' . $name_to_be_saved);
        $stats = $file->tracks[0]->stats->toArray();

        // saving to route to db
        $route = new Route;
        $route->name = $route_name;
        $route->url = $name_to_be_saved;
        $route->length = $stats['distance'];
        $route->elevation_gain = $stats['cumulativeElevationGain'];
        $route->save();


        return response(compact('path', 'original_extension', 'route_name', 'name_to_be_saved', 'stats'), 200)
                  ->header('Content-Type', 'application/json');
        
    }
    
    public function test ()
    {
        $gpx = new phpGPX();
    
        // $content = Storage::get('/public/gpx/Evening_Run.gpx');

        $file = $gpx->load('./gpx/Evening_Run.gpx');
        
        $stats = $file->tracks[0]->stats->toArray();
        
        dd($stats);
        
    }

}
