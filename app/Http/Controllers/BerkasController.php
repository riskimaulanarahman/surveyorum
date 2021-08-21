<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
use DB;
use Auth;

class BerkasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $module)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id,$module)
    {
        if($module == 'foto-cust') { // module
            $file = $request->file('fotocustomer'); // name value
            $nama_file = $module."_".time()."_".$file->getClientOriginalName(); //  nama file
            $tujuan_upload = 'upload'; // tujuan upload
            $file->move($tujuan_upload,$nama_file); // memindahkan data ke folder upload
            
            $data = Customer::findOrFail($id); // get id_cust pada table customer
            $data->update([
                'foto_cust' => $nama_file
            ]); // update column foto_cust
        } else if($module == 'foto-ktp') {
            $file = $request->file('fotoktp');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_ktp_cust' => $nama_file
            ]);
        } else if($module == 'foto-ktp-pasangan') {
            $file = $request->file('fotoktppasangan');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_ktp_pasangan' => $nama_file
            ]);
        } else if($module == 'foto-kk') {
            $file = $request->file('fotokk');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_kk_cust' => $nama_file
            ]);
        } else if($module == 'foto-ktp-penjamin') {
            $file = $request->file('fotoktppenjamin');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_ktp_penjamin' => $nama_file
            ]);
        } else if($module == 'foto-bukti-kerja') {
            $file = $request->file('fotobuktikerja');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_bukti_kerja_cust' => $nama_file
            ]);
        } else if($module == 'foto-rek-koran') {
            $file = $request->file('fotorekkoran');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_rek_koran' => $nama_file
            ]);
        } else if($module == 'foto-rumah') {
            $file = $request->file('fotorumah');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_rumah_cust' => $nama_file
            ]);
        } else if($module == 'foto-lingkungan') {
            $file = $request->file('fotolingkungan');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_lingkungan' => $nama_file
            ]);
        } else if($module == 'foto-tambahan') {
            $file = $request->file('fototambahan');
            $nama_file = $module."_".time()."_".$file->getClientOriginalName();
            $tujuan_upload = 'upload';
            $file->move($tujuan_upload,$nama_file);
            
            $data = Customer::findOrFail($id);
            $data->update([
                'foto_tambahan' => $nama_file
            ]);
        }
        
        // if($module == 'suratmasuk') {

        //     $data = SuratMasuk::findOrFail($id);
        //     $data->update([
        //         'lampiran' => $nama_file
        //     ]);
            
        // } else if($module == 'suratkeluar') {
            
        //     $data = SuratKeluar::findOrFail($id);
        //     $data->update([
        //         'lampiran' => $nama_file
        //     ]);
            
        // } else if($module == 'suratpelayanan') {
            
        //     $data = SuratPelayanan::findOrFail($id);
        //     $data->update([
        //         'lampiran' => $nama_file
        //     ]);
            
        // }
        
 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
