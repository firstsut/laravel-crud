<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\ProcessPodcast;

class SinglePageController extends Controller
{
    //
    public function index(Request $request){
        return view('app');
    }

    public function queue(Request $request){
        ProcessPodcast::dispatch(date('Y-m-d h:i:sa'));
    }
}
