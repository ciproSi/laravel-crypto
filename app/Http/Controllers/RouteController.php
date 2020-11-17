<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use phpGPX\phpGPX;

use Illuminate\Http\Request;
use phpGPX\Models\GpxFile;

class RouteController extends Controller
{
    
    public function create ()
    {
        return view('routes.create');
    }

    public function store (Request $request)
    {
        // $path = $request->file('gpxfile')->store('gpx');
        // $name = $request->file()->getClientOriginalName();

        // dd($request);
        $path = $request->file('GPXFile')->store('public/gpx');
        
        return response($path, 200)
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
