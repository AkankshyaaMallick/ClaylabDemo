'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Heading from '../heading';

export default function StatutoryInfo() {
  return (
    <section className='py-8 sm:py-12 px-2 sm:px-4 md:px-16'>
    <Card className="max-w-7xl shadow-2xl bg-[#C3D7C435] m-2 rounded-2xl p-2">
      <CardContent className="space-y-2 sm:space-y-4">
        <Heading text="STATUTORY INFORMATION" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-4 sm:gap-x-10 text-xs sm:text-sm md:text-base text-gray-800">
          <div className="font-medium">Type of organization</div>
          <div>Section 8 Company (Not For Profit)</div>

          <div className="font-medium">CIN</div>
          <div>U 80301 HR 2020 NPL 087673</div>

          <div className="font-medium">Registration Date</div>
          <div>20 July 2020</div>

          <div className="font-medium">Registered Office</div>
          <div>Gurugram, Haryana, India</div>

          <div className="font-medium">Directors</div>
          <div>
            1. <Link href="#" className=" underline">Vivek Kaushik</Link><br />
            2. <Link href="#" className=" underline">Ashish Alawadhi</Link>
          </div>

          <div className="font-medium">Area of operation</div>
          <div>Mumbai, Pune, Delhi, Ahmedabad, and Bengaluru</div>

          <div className="font-medium">80 G Approval</div>
          <div>Yes, 12 A and 80G approval for Claylab till 2026–27</div>

          <div className="font-medium">DARPAN ID</div>
          <div>HR/2021/0286918</div>

          <div className="font-medium">Incubated by</div>
          <div className="space-y-1">
            <p>
              <Link href="#" className=" underline">
                InnovatEd– 2021–22 (Teach For India)
              </Link>
            </p>
            <p>
              <Link href="#" className=" underline">
                UnLtd India, 2022–23
              </Link>
            </p>
            <p>
              <Link href="#" className=" underline">
                Eivolve – 2022–23
              </Link>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    </section>
  );
}