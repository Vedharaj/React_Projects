import trollFace from '../images/Troll Face.png'

export default function Header() {
  return (
      <header className="header">
          <img 
              src={trollFace}
              className="header--image"
              alt='logo'
          />
          <h2 className="header--title">Meme Generator</h2>
      </header>
  )
}