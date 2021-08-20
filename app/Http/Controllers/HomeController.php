<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use Illuminate\Support\Carbon;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $user = Auth::user();
        
        return view('pages/customer');
           
        // if(Auth::user()->role == 'admin') {
            
        //     return view('pages/customer');

        // } elseif(Auth::user()->role == 'marketing') {

        //     return view('pages/customer');

        // } 
    }
}
