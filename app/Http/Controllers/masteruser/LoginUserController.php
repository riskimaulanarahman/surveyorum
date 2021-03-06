<?php

namespace App\Http\Controllers\masteruser;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;


class LoginUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = User::all();

            return response()->json(['status' => "show", "message" => "Menampilkan Data" , 'data' => $data]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {
            $validator = $request->validate([
                'npo' => 'required | unique:users',
                'email' => 'required | unique:users',
            ]);

            $data = User::create([
                'nama_lengkap' => $request->nama_lengkap,
                'npo' => $request->npo,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'pass_txt' => $request->password,
                'role' => $request->role,
            ]);

            // if ($validator->fails()) {
            //     $error = $validator->errors()->first();
            //     return response()->json(["status" => "success", "message" => $error]);

            // }

            return response()->json(["status" => "success", "message" => "Berhasil Menambahkan Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    public function show()
    {
        return view('pages/masteruser/masteruser');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {

            $data = User::findOrFail($id);
            $data->update($request->all());
            $data->save();

            if(!empty($request->password)) {
                $data->password = bcrypt($request->password);
                $data->pass_txt = $request->password;
                $data->save();
            }
        

            return response()->json(["status" => "success", "message" => "Berhasil Ubah Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data = User::findOrFail($id);
            $data->delete();

            return response()->json(["status" => "success", "message" => "Berhasil Hapus Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }
}
