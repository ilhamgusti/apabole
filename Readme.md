# Mini Test

program ApaBole, sebuah test sederhana yang diberikan oleh stamp.co.id

### Rule

1.  Gunakan program apa saja untuk menyelesaikan program ini.
2.  Sertakan Source Code dan hasilnya dibawa saat interview.

### Program ApaBole

Print angka 1 sampai 100. dengan aturan:

1. Untuk setiap angka yang bisa dibagi dengan 3, jangan print angka nya, tapi print "Apa".
2. Kalau bisa dibagi dengan angka 5, print "Bole.
3. Kalau bisa dibagi dengan angka 3 dan 5, print "ApaBole".

Berikut contoh hasil program "ApaBole" untuk angka 1 sampai 30 ( yang diharapkan dari kandidat adalah 1 - 100):

```bash
1, 2, Apa, 4, Bole, Apa, 7, 8, Apa, Bole, 11, Apa, 13, 14, ApaBole, 16, 17, Apa, 19, Bole, Apa, 22, 23, Apa, Bole, 26, Apa, 28, 29, ApaBole
```

## Solusi

1. Gunakan Looping untuk mencetak 1 - 100
2. di dalam looping gunakan mod untuk kondisi habis dibagi 3 cetak "Apa" Habis dibagi 5 cetak "Bole dan Habis dibagi 3 dan 5 cetak "ApaBole"
