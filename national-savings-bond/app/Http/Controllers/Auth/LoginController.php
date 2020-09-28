<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
//use App\Global\Variables;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $t3 = public_path("assets/css/app.css");
        // var_dump($t3);
        // var_dump(file_exists($t3));
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        //dd($request->all());
        if(Auth::attempt([
            'email' => $request->email, 
            'password' => $request->password
        ]))
        { 
            $user = Auth::user(); 
            //$success['token'] =  $user->createToken('MyApp')->accessToken; 
            return response()->json([
                'success' => true,
                'token' => $user->createToken('MyApp')->accessToken,
                'image' => url('images/users/'.$user->image)
            ], 200); 
        } 
        else
        { 
            return response()->json([
                'success'=> false
            ], 200); 
        } 
    }
}
