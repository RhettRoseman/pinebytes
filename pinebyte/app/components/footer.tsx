import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <div className="text-white bg-green-900 text-center">
            <div>
            <Link href="/privacypolicy"> Privacy Policy </Link> | <Link href="/terms-conditions"> Terms & Conditions </Link>
            </div>
            <p className="mt-12  text-sm text-white text-center">
  &copy; {new Date().getFullYear()} PinebyteDigital. All rights reserved. PinebyteDigital™ is a trademark of PinebyteDigital, LLC. Any unauthorized use is prohibited.
</p>
        </div>
    )
}