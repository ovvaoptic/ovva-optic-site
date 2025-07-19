
import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
      <Image src="/ovva_logo.png" width={180} height={180} alt="Ovva Logo" />
      <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>Ovva Optic</h1>
      <p>Montaj pe loc · Reparații · Consult Optometric</p>
      <p>Din 2022 în Cluj-Napoca</p>
      <h2 style={{ marginTop: '2rem' }}>Contact</h2>
      <p>📍 Strada București nr. 77, Cluj-Napoca</p>
      <p>📞 0728 005 809</p>
      <p>📧 ovvaoptic@gmail.com</p>
    </main>
  )
}
