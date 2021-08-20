<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
use DB;
use Auth;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        try {
            if($user->role == 'marketing') {
                $data = Customer::with(['users','userfv'])->where('id_user',$user->id)->get();
            } else {
                // $data = Customer::with(['users','userfv'])->get();
                $data = Customer::with(['users','userfv'])->get();
            }
            // $data = Customer::with('users')->get();


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
        $user = Auth::user();

        $date = $request->tgl_lahir_cust;
        $fixed = date('Y-m-d', strtotime(substr($date,0,10)));
        $date2 = $request->tgl_lahir_pasangan;
        $fixed2 = date('Y-m-d', strtotime(substr($date2,0,10)));

        $requestData = $request->all();
        if($date) {
            $requestData['tgl_lahir_cust'] = $fixed;
        }
        if($date2) {
            $requestData['tgl_lahir_pasangan'] = $fixed2;
        }
        $requestData['id_user'] = $user->id;
        $requestData['status'] = 'Belum Selesai';
        
        try {
            Customer::create($requestData);

            return response()->json(["status" => "success", "message" => "Berhasil Menambahkan Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('pages/customer');
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
        $user = Auth::user();

        $date = $request->tgl_lahir_cust;
        $fixed = date('Y-m-d', strtotime(substr($date,0,10)));
        $date2 = $request->tgl_lahir_pasangan;
        $fixed2 = date('Y-m-d', strtotime(substr($date2,0,10)));

        $requestData = $request->all();
        if($date) {
            $requestData['tgl_lahir_cust'] = $fixed;
        }
        if($date2) {
            $requestData['tgl_lahir_pasangan'] = $fixed2;
        }

        if($user->role == 'fv') {
            $requestData['id_fv'] = $user->id;
        }
        
        try {
            $data = Customer::findOrFail($id);

            if($user->role !== "admin" && $data->status == 'Sudah Selesai') {
                return response()->json(["status" => "error", "message" => "Status (Sudah Selesai) Data Tidak Bisa Dirubah"]);
            } else {
                $data->update($requestData);
                return response()->json(["status" => "success", "message" => "Berhasil Ubah Data"]);
            }


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
            $data = Customer::where('id_cust',$id)->delete();

            return response()->json(["status" => "success", "message" => "Berhasil Hapus Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }
}
