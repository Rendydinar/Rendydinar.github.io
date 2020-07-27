SUMBER: https://www.freecodecamp.org/news/how-to-leverage-your-react-skills-with-static-site-generator-gatsby-js-81843e928606/
Cara memanfaatkan keterampilan REACT Anda dengan Gatsby.js penghasil situs statis.

Amber Wilkie
Pengembang perangkat lunak, sebagian besar Ruby dan Javascript. Yogi, Traveler, Penggemar. Semua foto milikku.

Apa itu situs statis dan mengapa Anda menginginkannya?
Situs statis, berbeda dengan situs dinamis, adalah situs yang a) tidak berinteraksi dengan basis data, dan b) terlihat sama untuk semua orang. Setiap halaman situs statis ada sebagai file terpisah.

Jika Anda pernah bekerja dengan React atau sebagian besar kerangka kerja front-end lainnya, Anda akan mengenali bahwa ini berbeda dari model favorit kami saat ini dari "situs satu halaman" - Anda dapat mengklik tautan, tetapi Anda selalu tetap "di halaman yang sama ” Setiap situs Bereaksi di internet diberikan hampir sepenuhnya dalam appdiv halaman HTML yang sangat dasar. Segala sesuatu di dalam div dihasilkan secara dinamis. Seringkali sangat khusus untuk pengguna di depan komputer.

Lebih lanjut membantu untuk memahami beberapa hal yang tidak dapat dilakukan situs statis:

Render halaman secara dinamis berdasarkan informasi basis data (menampilkan informasi pengguna di /user/<user-id>, misalnya)
Buat dan gunakan login / otentikasi pengguna
Yakinlah akan adanya data yang ada (tentu saja, Anda dapat menggunakan cookie, tetapi pengguna Anda selalu bebas untuk membuangnya)

Keuntungan
Situs statis cepat , karena mereka tidak perlu berbicara dengan basis data apa pun untuk mendapatkan informasi mereka. Mereka juga sudah dirender dan dibuat ketika pengguna meminta halaman dari browser mereka, sehingga tersedia secara instan (tentu saja pemuatan gambar). Semua kode yang diperlukan untuk menjalankan situs web Anda disediakan untuk browser dan dijalankan secara lokal.

Situs statis dapat di- host secara sederhana . Tidak ada Heroku yang tertidur, tidak ada server yang berputar. Tak perlu dikatakan bahwa ini adalah cara termurah untuk mendapatkan konten Anda ke dunia. Sebagian besar akan puas dengan opsi gratis untuk situs sederhana.

Situs statis stabil . Satu-satunya penghalang untuk semakin banyak pengguna memuat situs Anda adalah server hosting tempat Anda menyimpan file Anda. Tidak ada kekhawatiran tentang pemuatan atau pemrosesan basis data. Itu hanya mengirim lebih dari file HTML, CSS dan Javascript, dan dapat melakukannya secepat tuan rumah Anda mengizinkan.

Kekurangan
Semua kerugian utama dimasukkan ke dalam konsep situs statis: kesulitan dalam memperbarui konten dan kurangnya respons terhadap pengguna. Jika proyek Anda memerlukan login, situs statis bukan hal yang tepat untuk Anda. Jika Anda memiliki banyak konten, atau konten serupa yang ingin ditampilkan dengan cara yang serupa, ini juga bisa menjadi alat yang salah.

Saya pribadi tidak berpikir blog adalah kandidat yang baik untuk alat seperti ini, karena itu membutuhkan terlalu banyak langkah untuk beralih dari pembuatan ke penerbitan. Jika Anda telah menggunakan sesuatu seperti Wordpress, itu akan terasa seperti pekerjaan keras untuk membuat semuanya hidup. Kemudian lagi, Anda mengontrol konten Anda dari depan ke belakang, dan itu sangat menarik bagi banyak orang.

Sisa dari artikel ini akan membahas bagaimana cara membuat situs statis. Hanya beberapa tahun yang lalu, jika Anda menginginkannya, Anda harus menulis semuanya dari awal. Kemudian berpotensi digunakan melalui FTP atau sejenisnya. Tapi saya di sini untuk mengatakan: Anda dapat membangun situs web statis menggunakan keterampilan Bereaksi Anda. Mari kita melompat.

Kekurangan
Semua kerugian utama dimasukkan ke dalam konsep situs statis: kesulitan dalam memperbarui konten dan kurangnya respons terhadap pengguna. Jika proyek Anda memerlukan login, situs statis bukan hal yang tepat untuk Anda. Jika Anda memiliki banyak konten, atau konten serupa yang ingin ditampilkan dengan cara yang serupa, ini juga bisa menjadi alat yang salah.

Saya pribadi tidak berpikir blog adalah kandidat yang baik untuk alat seperti ini, karena itu membutuhkan terlalu banyak langkah untuk beralih dari pembuatan ke penerbitan. Jika Anda telah menggunakan sesuatu seperti Wordpress, itu akan terasa seperti pekerjaan keras untuk membuat semuanya hidup. Kemudian lagi, Anda mengontrol konten Anda dari depan ke belakang, dan itu sangat menarik bagi banyak orang.

Sisa dari artikel ini akan membahas bagaimana cara membuat situs statis. Hanya beberapa tahun yang lalu, jika Anda menginginkannya, Anda harus menulis semuanya dari awal. Kemudian berpotensi digunakan melalui FTP atau sejenisnya. Tapi saya di sini untuk mengatakan: Anda dapat membangun situs web statis menggunakan keterampilan Bereaksi Anda. Mari kita melompat.