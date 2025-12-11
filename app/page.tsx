import { Button } from '@/components/ui/button';
import { Link2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation */}
      

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-purple-600/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              New Update v2 Out Now
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Client<br />
              Management<br />
              System
            </h1>
            <h1>Boost Productivity, Elevate Client Experience.</h1>
            
            <p className="text-purple-200 text-lg max-w-xl">
              Gain a 360 view of your business by onboarding & managing clients, projects, estimates, invoices, and more! Easily set all that up in the safety of your own Wordpress environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-linear-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                Get Started
              </button>
              <button className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition">
                Start Your Free Trail
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Cards */}
          <div>
            <Image src={"/chart.png"} alt='this is chart image' width={500} height={100}/>
          </div>
        </div>  
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 lg:px-12 pb-12">
        <div className="text-center mb-8">
          <p className="text-purple-300 text-sm mb-6">Trusted By The World's Most Innovative Company</p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
            <div className="text-2xl font-bold">Google</div>
            <div className="text-xl font-semibold">hotjar</div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              </svg>
              <span className="font-semibold">Dropbox</span>
            </div>
            <div className="text-xl font-semibold">hotjar</div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              </svg>
              <span className="font-semibold">Dropbox</span>
            </div>
            <div className="text-2xl font-bold">Google</div>
          </div>
        </div>
        
        <p className="text-center text-purple-300 text-sm">
          Empowering Over 1400+ Businesses Globally! Proudworks is Their Growth Partner.
        </p>
      </div>
    </div>
  );
}