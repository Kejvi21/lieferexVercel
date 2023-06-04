import Link from 'next/link'
import Image from 'next/image'
import {Badge} from 'react-bootstrap'

export default function Navigation() {
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-danger">
      <div className="d-flex justify-content-between align-items-center">
        <Link legacyBehavior href="/">
          <a>
            <Image src={'/bilder/logo1.png'} alt='logo' width={160} height={80} />
          </a>
        </Link>
        <Link legacyBehavior href="/warenkorb">
          <a>
            <Image src={'/bilder/warenkorb.png'} alt='warenkorb' width={30} height={30} />
            <Badge pill bg="success">2</Badge>
          </a>
        </Link>
      </div>
    </div>
  )
}