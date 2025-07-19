import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', lineHeight: 1.6 }}>
      <header style={{ backgroundColor: '#003366', color: '#fff', padding: '1.5rem', textAlign: 'center' }}>
        <Image src="/ovva_logo.png" width={120} height={120} alt="Ovva Logo" />
        <h1 style={{ marginTop: '1rem' }}>Ovva Optic</h1>
        <p>Ochelari de calitate la prețuri corecte – din 2022 în inima Clujului</p>
      </header>

      <main style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <section style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Despre noi</h2>
          <p>
            Ovva Optic este o optică modernă din Cluj-Napoca, deschisă din dorința de a oferi clienților noștri
            ochelari de calitate, confortabili și estetici, la prețuri corecte. Din 2022, ne-am angajat să oferim
            servicii optice rapide și profesioniste, folosind tehnologie de ultimă generație.
          </p>
          <p>
            Oferim montaj pe loc, reparații și consultații optometrice, într-un ambient prietenos și cu respect pentru timpul tău.
          </p>
        </section>

        <section style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Formular de Programare</h2>
          <form action="https://formspree.io/f/xqkrgpzv" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <input type="text" name="nume" placeholder="Nume complet" required style={inputStyle} />
            <input type="tel" name="telefon" placeholder="Număr de telefon" required style={inputStyle} />
            <input type="email" name="email" placeholder="Adresă de email (opțional)" style={inputStyle} />
            <textarea name="mesaj" placeholder="Mesaj / Serviciu dorit" rows="4" style={inputStyle}></textarea>
            <button type="submit" style={buttonStyle}>Trimite solicitarea</button>
          </form>
        </section>
      </main>

      <footer style={{ backgroundColor: '#003366', color: '#fff', textAlign: 'center', padding: '1rem', marginTop: '3rem' }}>
        <p>📍 Strada București nr. 77, Cluj-Napoca</p>
        <p>📞 0728 005 809 | 📧 ovvaoptic@gmail.com</p>
        <p>&copy; 2025 Ovva Optic</p>
      </footer>
    </div>
  )
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem'
}

const buttonStyle = {
  padding: '0.75rem',
  backgroundColor: '#0055aa',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer'
}