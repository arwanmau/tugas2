<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Halaman profil {{ $profile['name'] }}, mahasiswa dengan NIM {{ $profile['nim'] }}."
    />
    <meta name="theme-color" content="#10131f" />
    <title>Profil | {{ $profile['name'] }}</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}" />
    <script src="{{ asset('js/script.js') }}" defer></script>
  </head>
  <body>
    <main class="profile-card">
      <div class="card-glow" aria-hidden="true"></div>
      <header class="profile-header">
        <img
          class="avatar"
          src="{{ asset('images/profile-photo.jpeg') }}"
          alt="Foto profil {{ $profile['name'] }}"
        />
        <p class="eyebrow">HALO, SAYA</p>
        <h1>{{ $profile['name'] }}</h1>
        <p class="subtitle">{{ $profile['status'] }}</p>
      </header>

      <section class="profile-details" aria-labelledby="details-title">
        <h2 id="details-title">Tentang Saya</h2>
        <p class="intro">
          Selamat datang di halaman profil saya. Berikut informasi identitas
          akademik saya.
        </p>
        <dl class="detail-list">
          <div class="detail-item">
            <dt>Nama</dt>
            <dd>{{ $profile['name'] }}</dd>
          </div>
          <div class="detail-item">
            <dt>NIM</dt>
            <dd>{{ $profile['nim'] }}</dd>
          </div>
          <div class="detail-item">
            <dt>Status</dt>
            <dd><span class="status-dot"></span>{{ $profile['status'] }}</dd>
          </div>
        </dl>
      </section>

      <footer class="profile-footer">
        <p>Dibuat dengan Laravel</p>
        <button class="theme-toggle" type="button" aria-pressed="false">
          <span class="theme-icon" aria-hidden="true">☼</span>
          <span class="theme-label">Ganti tema</span>
        </button>
      </footer>
    </main>
  </body>
</html>
