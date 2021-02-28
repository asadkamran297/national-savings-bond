<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReactController extends Controller
{
    public function show () {
        return view('login');
    }

    public function dashboard () {
        return view('dashboard');
    }
}
