-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 25, 2021 at 04:48 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `surveyor`
--

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('NwlpGwCEsDcEZqT8LILf8jibxHH0pksi3HPQlWKw', 21, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoic2szeXdUMUJGNmowd1BJeGlBU1VUQkZzbk5IekZWcXNkRFZzNUpDSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyMTt9', 1629518441),
('ny7OlfFOrVT8Fo26XlVZgY0h7DxYGvS2aDOLJ76Z', NULL, '127.0.0.1', 'PostmanRuntime/7.28.3', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiNDRwcE42a0c5VDVwWmpLTGdGME1rdkFjQWFTaE1hWUpnelBjbUt3WCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozNDoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9jdXN0b21lciI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1629510762),
('xDs02LR4LJcUxDHlUnBIpFcK6BjpfEQJDBhSliwi', 21, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoia0pUaTA4VDZDQUQ0VndNSGVGY3pRTmNST09TODF3ZVVjdFhrNXV2YiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyMTt9', 1629898159);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust`
--

CREATE TABLE `tbl_cust` (
  `id_cust` int(11) NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `nama_cust` varchar(100) DEFAULT NULL,
  `tempat_lahir_cust` varchar(100) DEFAULT NULL,
  `tgl_lahir_cust` date DEFAULT NULL,
  `no_hp_cust` varchar(100) DEFAULT NULL,
  `email_cust` varchar(100) DEFAULT NULL,
  `nama_pasangan` varchar(100) DEFAULT NULL,
  `tempat_lahir_pasangan` varchar(100) DEFAULT NULL,
  `tgl_lahir_pasangan` date DEFAULT NULL,
  `no_hp_pasangan` varchar(100) DEFAULT NULL,
  `email_pasangan` varchar(100) DEFAULT NULL,
  `lokasi` varchar(100) DEFAULT NULL,
  `bertemu_dengan` varchar(100) DEFAULT NULL,
  `pilihan_survey` varchar(100) DEFAULT NULL,
  `alamat_survey` varchar(100) DEFAULT NULL,
  `status_kawin` varchar(100) DEFAULT NULL,
  `tanggungan` varchar(100) DEFAULT NULL,
  `catatan_tanggungan` varchar(100) DEFAULT NULL,
  `tempat_kerja_cust` varchar(100) DEFAULT NULL,
  `jabatan_cust` varchar(100) DEFAULT NULL,
  `alamat_kantor_cust` varchar(100) DEFAULT NULL,
  `gaji_cust` varchar(100) DEFAULT NULL,
  `pengeluaran_cust` varchar(100) DEFAULT NULL,
  `catatan_pekerjaan_cust` varchar(100) DEFAULT NULL,
  `tempat_kerja_pasangan` varchar(100) DEFAULT NULL,
  `jabatan_pasangan` varchar(100) DEFAULT NULL,
  `alamat_kantor_pasangan` varchar(100) DEFAULT NULL,
  `gaji_pasangan` varchar(100) DEFAULT NULL,
  `catatan_pekerjaan_pasangan` varchar(100) DEFAULT NULL,
  `nama_penjamin` varchar(100) DEFAULT NULL,
  `hubungan_penjamin` varchar(100) DEFAULT NULL,
  `no_hp_penjamin` varchar(100) DEFAULT NULL,
  `catatan_penjamin` varchar(100) DEFAULT NULL,
  `nama_ecall` varchar(100) DEFAULT NULL,
  `hubungan_ecall` varchar(100) DEFAULT NULL,
  `alamat_ecall` varchar(100) DEFAULT NULL,
  `no_hp_ecall` varchar(100) DEFAULT NULL,
  `keberadaan_lingkungan` varchar(100) DEFAULT NULL,
  `catatan_lingkungan` varchar(100) DEFAULT NULL,
  `unit_untuk` varchar(100) DEFAULT NULL,
  `catatan_unit` varchar(100) DEFAULT NULL,
  `foto_cust` varchar(100) DEFAULT NULL,
  `foto_ktp_cust` varchar(100) DEFAULT NULL,
  `foto_ktp_pasangan` varchar(100) DEFAULT NULL,
  `foto_kk_cust` varchar(100) DEFAULT NULL,
  `foto_ktp_penjamin` varchar(100) DEFAULT NULL,
  `foto_bukti_kerja_cust` varchar(100) DEFAULT NULL,
  `foto_rek_koran` varchar(100) DEFAULT NULL,
  `foto_rumah_cust` varchar(100) DEFAULT NULL,
  `foto_lingkungan` varchar(100) DEFAULT NULL,
  `foto_tambahan` varchar(100) DEFAULT NULL,
  `id_fv` int(10) UNSIGNED DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cust`
--

INSERT INTO `tbl_cust` (`id_cust`, `id_user`, `nama_cust`, `tempat_lahir_cust`, `tgl_lahir_cust`, `no_hp_cust`, `email_cust`, `nama_pasangan`, `tempat_lahir_pasangan`, `tgl_lahir_pasangan`, `no_hp_pasangan`, `email_pasangan`, `lokasi`, `bertemu_dengan`, `pilihan_survey`, `alamat_survey`, `status_kawin`, `tanggungan`, `catatan_tanggungan`, `tempat_kerja_cust`, `jabatan_cust`, `alamat_kantor_cust`, `gaji_cust`, `pengeluaran_cust`, `catatan_pekerjaan_cust`, `tempat_kerja_pasangan`, `jabatan_pasangan`, `alamat_kantor_pasangan`, `gaji_pasangan`, `catatan_pekerjaan_pasangan`, `nama_penjamin`, `hubungan_penjamin`, `no_hp_penjamin`, `catatan_penjamin`, `nama_ecall`, `hubungan_ecall`, `alamat_ecall`, `no_hp_ecall`, `keberadaan_lingkungan`, `catatan_lingkungan`, `unit_untuk`, `catatan_unit`, `foto_cust`, `foto_ktp_cust`, `foto_ktp_pasangan`, `foto_kk_cust`, `foto_ktp_penjamin`, `foto_bukti_kerja_cust`, `foto_rek_koran`, `foto_rumah_cust`, `foto_lingkungan`, `foto_tambahan`, `id_fv`, `status`, `created_at`, `updated_at`) VALUES
(18, 22, 'loki', 'fgewgew', '2021-08-20', '215464363', 'gsgerherhre', NULL, NULL, NULL, NULL, NULL, 'sdgdshgdh', 'erhbdbdf', 'Koperatif', 'sgdfjrthjrt', 'Lajang', '235', '2332', 'greghreb', 'bbreb', 'brebre', '32530', '85689765976', 'dgsdsghrehre', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'greghrehe', 'greheher', 'gdfgherhteh', '54645745', 'Dikenal', 'greghrehre', 'Sendiri', 'hfdhhtrhter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 21, 'Belum Selesai', '2021-08-20 18:23:23', '2021-08-20 18:50:41'),
(19, 19, 'dedi sanjaya purnama', 'balikpapan', '2021-08-23', '812345678', 'dedi@gmail.com', NULL, NULL, NULL, NULL, NULL, 'gang mawar', 'customer', 'Koperatif', 'gang mawar', 'Kawin', '1', 'tidak ada', 'pemkot', 'staff', 'klandasan', '5000000', '2500000', 'null', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'rina', 'ibu', 'gang anggrek', '8213456907', 'Dikenal', 'null', 'Sendiri', 'null', 'foto-cust_1629518315_loli.jpeg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 21, 'Sudah Selesai', '2021-08-20 19:57:08', '2021-08-20 19:59:30');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) UNSIGNED NOT NULL,
  `npo` int(11) DEFAULT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass_txt` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `npo`, `nama_lengkap`, `email`, `password`, `pass_txt`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 111220895, 'admin', 'admin@mail.com', '$2y$10$/DoA5h9Ycf.Fqt.AkRmtOe0Q49wQ2BbDGf4lMEooz/FL/Px9brYiy', 'admin', 'admin', NULL, '2021-08-08 22:30:42', '2021-08-20 05:51:07'),
(19, 111908776, 'nia', 'nia@mail.com', '$2y$10$ZiPhNavcwBiOCx0PNdeAeeo1ZtB5FlV4vP2FFFRYKuU.mTwuMU0q.', '123', 'marketing', NULL, '2021-08-20 05:51:41', '2021-08-20 05:51:52'),
(21, 111789087, 'bayu', 'bayu@mail.com', '$2y$10$xBO9zKbQOm8ezCecEo5w8eEVx3p6dXc73VvjoesbaO.bZBXWLP3S2', '123', 'fv', NULL, '2021-08-20 05:56:10', '2021-08-20 05:56:10'),
(22, 111976573, 'kira', 'kira@mail.com', '$2y$10$4ZskGwnodKv7ah.2CZCNCucrR.RoyvKwR9a1ifD2E/KQJq2UlVP1C', '123', 'marketing', NULL, '2021-08-20 09:29:22', '2021-08-20 09:29:22'),
(23, 111789088, 'kukuh', 'kukuh@mail.com', '$2y$10$5vZDdbMMq6Qn6AYo/m2Cd.tt00Rc.VtHGwNSPg8AdbMedNl4t7pbW', NULL, 'fv', NULL, '2021-08-25 05:15:43', '2021-08-25 05:15:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `tbl_cust`
--
ALTER TABLE `tbl_cust`
  ADD PRIMARY KEY (`id_cust`),
  ADD KEY `fvusers` (`id_fv`),
  ADD KEY `cust_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `users_email_unique` (`email`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cust`
--
ALTER TABLE `tbl_cust`
  MODIFY `id_cust` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_cust`
--
ALTER TABLE `tbl_cust`
  ADD CONSTRAINT `cust_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
