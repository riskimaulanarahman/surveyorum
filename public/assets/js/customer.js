$(document).ready(function(){
    role = $('.roleuser').val();
    
    
    var store = new DevExpress.data.CustomStore({
        key: "id_cust",
        load: function() {
            return sendRequest(apiurl + "/customer");
        },
        insert: function(values) {
            return sendRequest(apiurl + "/customer", "POST", values);
        },
        update: function(key, values) {
            return sendRequest(apiurl + "/customer/"+key, "PUT", values);
        },
        remove: function(key) {
            return sendRequest(apiurl + "/customer/"+key, "DELETE");
        }
    });

    function moveEditColumnToLeft(dataGrid) {
		dataGrid.columnOption("command:edit", { 
			visibleIndex: -1,
			width: 80 
		});
    }
    
    var id = {},
        popup = null,
        popupOptions = {
            width: 500,
            height: 450,
            contentTemplate: function() {
                var scrollView = $("<div />").append(
                    $("<p>Title: <span>Foto Customer</span> | File: <span>"+title_fotocust+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotocustomer",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-cust",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KTP</span> | File: <span>"+title_fotoktpcust+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotoktp",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-ktp",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KTP Pasangan</span> | File: <span>"+title_fotoktppasangan+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotoktppasangan",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-ktp-pasangan",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KK</span> | File: <span>"+title_fotokk+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotokk",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-kk",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KTP Penjamin</span> | File: <span>"+title_fotoktppenjamin+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotoktppenjamin",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-ktp-penjamin",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Bukti Kerja</span> | File: <span>"+title_fotobuktikerja+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotobuktikerja",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-bukti-kerja",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Rek Koran / Air / Listrik</span> | File: <span>"+title_fotorekkoran+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotorekkoran",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-rek-koran",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Rumah</span> | File: <span>"+title_fotorumah+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotorumah",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-rumah",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Lingkungan</span> | File: <span>"+title_fotolingkungan+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotolingkungan",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-lingkungan",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Tambahan</span> | File: <span>"+title_fototambahan+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fototambahan",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-tambahan",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    })
                );

                scrollView.dxScrollView({
                    width: '100%',
                    height: '100%'
                });
    

                return scrollView;
            },
            showTitle: true,
            title: "Upload Form",
            dragEnabled: false,
            closeOnOutsideClick: true
    };

    var showUpload = function(
            data,
            fotocust,
            fotoktpcust,
            fotoktppasangan,
            fotokk,
            fotoktppenjamin,
            fotobuktikerja,
            fotorekkoran,
            fotorumah,
            fotolingkungan,
            fototambahan
        ) 
        {
        id = data;

        (fotocust !== null) ? title_fotocust = fotocust : title_fotocust = "foto belum ada";
        (fotoktpcust !== null) ? title_fotoktpcust = fotoktpcust : title_fotoktpcust = "foto belum ada";
        (fotoktppasangan !== null) ? title_fotoktppasangan = fotoktppasangan : title_fotoktppasangan = "<b style='color:red;'>foto belum ada</b>";
        (fotokk !== null) ? title_fotokk = fotokk : title_fotokk = "<b style='color:red;'>foto belum ada</b>";
        (fotoktppenjamin !== null) ? title_fotoktppenjamin = fotoktppenjamin : title_fotoktppenjamin = "<b style='color:red;'>foto belum ada</b>";
        (fotobuktikerja !== null) ? title_fotobuktikerja = fotobuktikerja : title_fotobuktikerja = "<b style='color:red;'>foto belum ada</b>";
        (fotorekkoran !== null) ? title_fotorekkoran = fotorekkoran : title_fotorekkoran = "<b style='color:red;'>foto belum ada</b>";
        (fotorumah !== null) ? title_fotorumah = fotorumah : title_fotorumah = "<b style='color:red;'>foto belum ada</b>";
        (fotolingkungan !== null) ? title_fotolingkungan = fotolingkungan : title_fotolingkungan = "<b style='color:red;'>foto belum ada</b>";
        (fototambahan !== null) ? title_fototambahan = fototambahan : title_fototambahan = "<b style='color:red;'>foto belum ada</b>";

        console.log(id);

        if(popup) {
            popup.option("contentTemplate", popupOptions.contentTemplate.bind(this));
        } else {
            popup = $("#popup").dxPopup(popupOptions).dxPopup("instance");
        }

        popup.show();
    };
        ScPilihan = [{id:1,valpilihan:"Koperatif"},{id:2,valpilihan:"Kurang Koperatif"},{id:3,valpilihan:"Tidak Koperatif"}];
        ScKawin = [{id:1,valkawin:"Lajang"},{id:2,valkawin:"Kawin"},{id:3,valkawin:"Cerai Hidup"},{id:4,valkawin:"Cerai Mati"}];
        ScKeberadaan = [{id:1,valkeberadaan:"Dikenal"},{id:2,valkeberadaan:"Kurang Dikenal"},{id:3,valkeberadaan:"Tidak Dikenal"},{id:4,valkeberadaan:"Karakter Buruk"}];
        ScUnit = [{id:1,valunit:"Sendiri"},{id:2,valunit:"Keluarga"},{id:3,valunit:"Orang Lain"},{id:4,valunit:"Lain-lain"}];
        ScStatus = [{id:1,valstatus:"Belum Selesai"},{id:2,valstatus:"Sudah Selesai"}];
        
        var dataGrid = $("#grid-customer").dxDataGrid({     
            dataSource: store,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnsAutoWidth: true,
            columnMinWidth: 80,
            columnHidingEnabled: false,
            wordWrapEnabled: true,
            showBorders: true,
            filterRow: { visible: true },
            filterPanel: { visible: true },
            headerFilter: { visible: true },
            selection: {
                mode: "multiple"
            },
            columnFixing: { 
                enabled: true
            },
            editing: {
                useIcons:true,
                mode: "popup",
                allowAdding: (role == "marketing")?true:false,
                
                // allowUpdating: (role=="admin" || role == "marketing" || role == "marketing")?true:false,
                allowUpdating: true,
                allowDeleting: false,
                popup: {
                    title: "Customer Info",
                    showTitle: false,
                    width: 700,
                    height: 525,
                    position: {
                        my: "center",
                        at: "center",
                        of: window
                    }
                },
                form: {
                    items: [{
                        caption: "Data Customer *Wajib, Pasangan Opsional",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "nama_cust",
                            "tempat_lahir_cust",
                            "tgl_lahir_cust",
                            "no_hp_cust",
                            "email_cust",
                            "nama_pasangan",
                            "tempat_lahir_pasangan",
                            "tgl_lahir_pasangan",
                            "no_hp_pasangan",
                            "email_pasangan",
                        ]
                    },
                    {
                        caption: "Lokasi *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "lokasi",
                        ]
                    },
                    {
                        caption: "Kondisi Survey *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "bertemu_dengan",
                            "pilihan_survey",
                            "alamat_survey",
                        ]
                    },
                    {
                        caption: "Status Perkawinan & Tanggungan *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "status_kawin",
                            "tanggungan",
                            "catatan_tanggungan",
                        ]
                    },
                    {
                        caption: "Pekerjaan *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "tempat_kerja_cust",
                            "jabatan_cust",
                            "alamat_kantor_cust",
                            "gaji_cust",
                            "pengeluaran_cust",
                            "catatan_pekerjaan_cust",
                        ]
                    },
                    {
                        caption: "Pekerjaan Pasangan (jika Lajang atau Ibu rumah tangga tidak perlu diisi)",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "tempat_kerja_pasangan",
                            "jabatan_pasangan",
                            "alamat_kantor_pasangan",
                            "gaji_pasangan",
                            "catatan_pekerjaan_pasangan",
                        ]
                    },
                    {
                        caption: "Penjamin (diisi jika cust lajang, cerai hidup, cerai mati) ",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "nama_penjamin",
                            "hubungan_penjamin",
                            "no_hp_penjamin",
                            "catatan_penjamin",
                        ]
                    },
                    {
                        caption: "E-Call (nomor hp keluarga yang tidak serumah) *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "nama_ecall",
                            "hubungan_ecall",
                            "alamat_ecall",
                            "no_hp_ecall",
                        ]
                    },
                    {
                        caption: "Informasi dari lingkungan *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "keberadaan_lingkungan",
                            "catatan_lingkungan",
                        ]
                    },
                    {
                        caption: "Peruntukan unit *Wajib",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "unit_untuk",
                            "catatan_unit",
                        ]
                    },
                    {
                        caption: "Status Data",
                        itemType: "group",
                        colCount: 2,
                        colSpan: 2,
                        items: [
                            "status",
                            
                        ]
                    },

                ]
                },
            },
            // scrolling: {
            //     mode: "infinite"
            // },
            
            pager: {
                allowedPageSizes: [5, 10, 15, 30],
                showInfo: true,
                showNavigationButtons: true,
                showPageSizeSelector: true,
                visible: true
            },
            paging: {
                pageSize: 5
            },
            columns: [
                {
                    caption: '#',formItem: {visible:false},width:40,
                    fixed: false,
                    cellTemplate:function(container,options) {
                        container.text(options.rowIndex +1);
                    }
                },
                { 
                    caption: "Creation Date",
                    dataField: "created_at",
                    dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                    width: 150,
                    formItem: {visible:false},
                },
                { 
                    caption: "Nama Customer",
                    dataField: "nama_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },
                { 
                    caption: "Tempat Lahir Customer",
                    dataField: "tempat_lahir_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Tanggal Lahir Customer",
                    dataField: "tgl_lahir_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nomor HP Customer",
                    dataField: "no_hp_cust",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Email Customer",
                    dataField: "email_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nama Pasangan (Opsional)",
                    dataField: "nama_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Tempat Lahir Pasangan (Opsional)",
                    dataField: "tempat_lahir_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Tanggal Lahir Pasangan (Opsional)",
                    dataField: "tgl_lahir_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                },{ 
                    caption: "Nomor HP Pasangan (Opsional)",
                    dataField: "no_hp_pasangan",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Email Pasangan (Opsional)",
                    dataField: "email_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Lokasi (Ancar-ancar)",
                    dataField: "lokasi",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Bertemu Dengan",
                    dataField: "bertemu_dengan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Pilihan Survey",
                    dataField: "pilihan_survey",
                    editorType: "dxSelectBox",
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScPilihan,  
                        valueExpr: 'valpilihan',
                        displayExpr: 'valpilihan',
                    },
                },{ 
                    caption: "Alamat Survey",
                    dataField: "alamat_survey",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Status Perkawinan",
                    dataField: "status_kawin",
                    editorType: "dxSelectBox",
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScKawin,  
                        valueExpr: 'valkawin',
                        displayExpr: 'valkawin',
                    },
                },{ 
                    caption: "Tanggungan (Jumlah Anak)",
                    dataField: "tanggungan",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Catatan Tanggungan",
                    dataField: "catatan_tanggungan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nama Tempat Kerja/Usaha",
                    dataField: "tempat_kerja_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Jabatan",
                    dataField: "jabatan_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Alamat Tempat Kerja",
                    dataField: "alamat_kantor_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Gaji",
                    dataField: "gaji_cust",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Pengeluaran",
                    dataField: "pengeluaran_cust",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Catatan Pekerjaan",
                    dataField: "catatan_pekerjaan_cust",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nama Tempat Kerja/Usaha Pasangan (Opsional)",
                    dataField: "tempat_kerja_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Jabatan Pasangan (Opsional)",
                    dataField: "jabatan_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Alamat Tempat Kerja Pasangan (Opsional)",
                    dataField: "alamat_kantor_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Gaji Pasangan (Opsional)",
                    dataField: "gaji_pasangan",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Catatan Pekerjaan Pasangan (Opsional)",
                    dataField: "catatan_pekerjaan_pasangan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Nama Penjamin (Opsional)",
                    dataField: "nama_penjamin",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Hubungan Penjamin (Opsional)",
                    dataField: "hubungan_penjamin",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Nomor HP Penjamin (Opsional)",
                    dataField: "no_hp_penjamin",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Catatan Penjamin (Opsional)",
                    dataField: "catatan_penjamin",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                },{ 
                    caption: "Nama Ecall (Keluarga Tidak Serumah)",
                    dataField: "nama_ecall",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Hubungan Ecall",
                    dataField: "hubungan_ecall",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Alamat Ecall",
                    dataField: "alamat_ecall",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nomor HP Ecall",
                    dataField: "no_hp_ecall",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Keberadaan",
                    dataField: "keberadaan_lingkungan",
                    editorType: "dxSelectBox",
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScKeberadaan,  
                        valueExpr: 'valkeberadaan',
                        displayExpr: 'valkeberadaan',
                    },
                },{ 
                    caption: "Catatan Lingkungan",
                    dataField: "catatan_lingkungan",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Unit Untuk ...",
                    dataField: "unit_untuk",
                    editorType: "dxSelectBox",
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScUnit,  
                        valueExpr: 'valunit',
                        displayExpr: 'valunit',
                    },
                },{ 
                    caption: "Catatan Unit",
                    dataField: "catatan_unit",
                    width: 150,
                    formItem: {visible:(role!=="admin")?true:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },
                { 
                    caption: "Foto Customer",
                    dataField: "foto_cust",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_cust+'" target="_blank">'+options.data.foto_cust+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto KTP",
                    dataField: "foto_ktp_cust",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_ktp_cust+'" target="_blank">'+options.data.foto_ktp_cust+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto KTP Pasangan",
                    dataField: "foto_ktp_pasangan",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_ktp_pasangan+'" target="_blank">'+options.data.foto_ktp_pasangan+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto KK",
                    dataField: "foto_kk_cust",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_kk_cust+'" target="_blank">'+options.data.foto_kk_cust+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto KTP Penjamin",
                    dataField: "foto_ktp_penjamin",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_ktp_penjamin+'" target="_blank">'+options.data.foto_ktp_penjamin+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto Bukti Kerja",
                    dataField: "foto_bukti_kerja_cust",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_bukti_kerja_cust+'" target="_blank">'+options.data.foto_bukti_kerja_cust+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto Rek Koran",
                    dataField: "foto_rek_koran",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_rek_koran+'" target="_blank">'+options.data.foto_rek_koran+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto Rumah",
                    dataField: "foto_rumah_cust",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_rumah_cust+'" target="_blank">'+options.data.foto_rumah_cust+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto Lingkungan",
                    dataField: "foto_lingkungan",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_lingkungan+'" target="_blank">'+options.data.foto_lingkungan+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Foto Tambahan",
                    dataField: "foto_tambahan",
                    width: 150,
                    formItem: {visible:false},
                    fixed: false,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_tambahan+'" target="_blank">'+options.data.foto_tambahan+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Nama Field Verifier",
                    dataField: "userfv.nama_lengkap",
                    visible: (role=="admin" || role == "marketing")?true:false,
                    fixed: true,
                    fixedPosition: "right",
                    formItem: {visible:false},
                    width: 150,
                },
                { 
                    caption: "Status",
                    dataField: "status",
                    fixed: true,
                    fixedPosition: "right",
                    formItem: {visible:(role=="admin")?true:false},
                    width: 150,
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: ScStatus,  
                        valueExpr: 'valstatus',
                        displayExpr: 'valstatus',
                    },
                },
                
                {
                    caption: 'Tambah/Edit Berkas',
                    formItem: {visible:false},
                    fixed: true,
                    fixedPosition: "right",
                    visible: (role=="fv")?true:false,
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                    $('<button class="btn btn-danger btn-xs">Upload</button>').addClass('dx-button').on('dxclick', function(evt) {
                        evt.stopPropagation();
                            showUpload(
                                options.data.id_cust,
                                options.data.foto_cust,
                                options.data.foto_ktp_cust,
                                options.data.foto_ktp_pasangan,
                                options.data.foto_kk_cust,
                                options.data.foto_ktp_penjamin,
                                options.data.foto_bukti_kerja_cust,
                                options.data.foto_rek_koran,
                                options.data.foto_rumah_cust,
                                options.data.foto_lingkungan,
                                options.data.foto_tambahan
                                );
                      
                    }).appendTo(container);
                    
                    }
                },
                // { 
                //     dataField: "perihal_surat",
                //     width: 150,
                // },{ 
                //     dataField: "tanggal_surat",
                //     width: 150,
                //     dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                // },{ 
                //     dataField: "tanggal_terima_surat",
                //     width: 150,
		        //     sortIndex: 0, sortOrder: "desc",
                //     dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                //     validationRules: [{ type: "required" }]
                // },{ 
                //     dataField: "asal_surat",
                //     width: 150,
                // },{ 
                //     dataField: "nama_pejabat_penerima_disposisi",
                //     width: 150,
                // },{ 
                //     dataField: "keterangan_pemberi_disposisi",
                //     width: 150,
                // },{ 
                //     dataField: "ringkasan_surat",
                //     width: 150,
                // },
                // { 
                //     dataField: "lampiran",
                //     width: 150,
                //     formItem: {visible:false},
                //     fixed: false,
                //     fixedPosition: "right",
                //     editorOptions: {
                //         disabled: true
                //     },
                //     cellTemplate: function(container, options) {
            
                //         $('<a href="/upload/'+options.data.lampiran+'" target="_blank">'+options.data.lampiran+'</a>').addClass('dx-link').appendTo(container);
                        
                //     }
                // },
                // { 
                //     caption: "creator",
                //     visible: (role=="admin")?true:false,
                //     dataField: "users.nama_lengkap",
                //     formItem: {visible:false},
                //     fixed: false,
                //     width: 150,
                // },
                
            ],
            export: {
                enabled: true,
                fileName: "surat-masuk",
                excelFilterEnabled: true,
                allowExportSelectedData: true
            },
            onContentReady: function(e){
                moveEditColumnToLeft(e.component);
            },
            onToolbarPreparing: function(e) {
                dataGrid = e.component;
        
                e.toolbarOptions.items.unshift({						
                    location: "after",
                    widget: "dxButton",
                    options: {
                        hint: "Refresh Data",
                        icon: "refresh",
                        onClick: function() {
                            dataGrid.refresh();
                        }
                    }
                },
                )
            },
            onSelectionChanged: function(data) {
                deleteButton.option("disabled", !data.selectedRowsData.length);
                // selectedItems = data.selectedRowsData;
                // disabled = !selectedItems.length;
            }, 
        }).dxDataGrid("instance");

    var deleteButton = $("#gridDeleteSelected").dxButton({
        text: "Delete Selected Records",
        height: 34,
        disabled: true,
        onClick: function () {
            var result = DevExpress.ui.dialog.confirm("Are you sure you want to delete selected?", "Delete row");
            result.done(function (dialogResult) {
                if (dialogResult){
                    $.each(dataGrid.getSelectedRowKeys(), function() {
                        store.remove(this);
                    });
                    dataGrid.refresh();
                }
            });
            
        }
    }).dxButton("instance");


});
