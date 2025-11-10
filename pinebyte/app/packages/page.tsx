import PackagesForm from '../components/packageform';
import { Suspense } from 'react';
import Image from 'next/image';
export default function PackagePage() {
    return (
        <div>
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div>
                        <Image
                            src="/pinebytelogo.png"
                            alt="Pinebyte Logo"
                            width={150}
                            height={150}
                            className="animate-pulse"
                        />
                    </div>

                    <p className="mt-4 text-green-900 font-semibold">
                        Loading...
                    </p>
                </div>
            }
            >
                <PackagesForm />
            </Suspense>

        </div>
    )
}