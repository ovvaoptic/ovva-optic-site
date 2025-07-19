import Image from 'next/image'

export default function Home() {
  return (
    <div style={ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', margin: 0 }>
      <header style={ backgroundColor: '#3d0ea8', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }>
        <Image src="/ovva_logo.png" width={160} height={100} alt="Ovva Optic Logo" />
        <h1 style={ marginTop: '1rem', fontSize: '2rem' }>Ovva Optic</h1>
        <p style={ fontWeight: 'bold', fontSize: '1.1rem' }>Ochelari de calitate la prețuri corecte</p>
        <nav style={ marginTop: '1rem' }>
          <a href="#despre" style={ margin: '0 1rem', color: '#fff', textDecoration: 'underline' }>Despre</a>
          <a href="#servicii" style={ margin: '0 1rem', color: '#fff', textDecoration: 'underline' }>Servicii</a>
          <a href="#programare" style={ margin: '0 1rem', color: '#fff', textDecoration: 'underline' }>Programare</a>
        </nav>
      </header>

      <main style={ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }>
        <section id="despre" style={ marginBottom: '3rem' }>
          <h2 style={ color: '#3d0ea8' }>Despre Ovva Optic</h2>
          <p>
            Înființată în 2022 în Cluj-Napoca, Ovva Optic oferă o gamă completă de servicii optice, într-un spațiu
            modern și prietenos. Ne mândrim cu o selecție atent aleasă de rame și lentile, montaj precis și consultanță
            profesională dedicată fiecărui client. Misiunea noastră este să aducem echilibru între estetică, funcționalitate și preț corect.
          </p>
        </section>

        <section id="servicii" style={ marginBottom: '3rem' }>
          <h2 style={ color: '#3d0ea8' }>Serviciile Noastre</h2>
          <ul style={ listStyleType: 'none', padding: 0 }>
            <li>👓 Montaj pe loc pentru ochelari</li>
            <li>🔧 Reparații rame & ajustări</li>
            <li>🧠 Consultații optometrice cu aparatură performantă</li>
            <li>💼 Consiliere profesională personalizată</li>
          </ul>
        </section>

        <section id="programare">
          <h2 style={ color: '#3d0ea8' }>Programează o vizită</h2>
          <form action="https://formspree.io/f/xqkrgpzv" method="POST" style={ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }>
            <input type="text" name="nume" placeholder="Nume complet" required style={ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' } />
            <input type="tel" name="telefon" placeholder="Telefon" required style={ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' } />
            <input type="email" name="email" placeholder="Email (opțional)" style={ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' } />
            <textarea name="mesaj" placeholder="Mesaj / serviciu dorit" rows="4" style={ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }></textarea>
            <button type="submit" style={ backgroundColor: '#3d0ea8', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }>Trimite</button>
          </form>
        </section>
      </main>

      <a href="https://wa.me/40728005809" target="_blank" style={
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        zIndex: 1000
      }>WhatsApp</a>

      <footer style={ backgroundColor: '#3d0ea8', color: '#fff', textAlign: 'center', padding: '1rem', marginTop: '4rem' }>
        <p>📍 Cluj-Napoca, Str. București nr. 77</p>
        <p>📞 0728 005 809 | ✉️ ovvaoptic@gmail.com</p>
        <p>&copy; 2025 Ovva Optic</p>
      </footer>
    </div>
  )
}