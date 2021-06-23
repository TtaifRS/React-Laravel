<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function Register(Request $request)
    {

        $validated = $request->validate(
            [
                'name' => 'required|unique:users|max:100',
                'email' => 'required|unique:users|max:100',
                'password' => 'required|max:100',
            ],
            [
                'name.required' => 'Please Input Name',
                'email.required' => 'Please Input Email',
                'password.required' => 'Please Input Password'
            ]
        );

        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return $user;
    }

    public function Login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return ["error" => "Email or Password didn't match"];
        }
        return $user;
    }
}
