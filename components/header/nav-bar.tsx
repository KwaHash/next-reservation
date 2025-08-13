'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { FaRegChartBar } from 'react-icons/fa'
import { FcHome } from 'react-icons/fc'
import { FiUploadCloud , FiHome, FiUser } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi'
import { LuBuilding2 } from 'react-icons/lu'
import { MdOutlinePalette } from 'react-icons/md'
import { RiRobot2Line } from 'react-icons/ri'
import { SlMenu } from 'react-icons/sl'
import MobileNavLink from '@/components/header/mobile-nav-link'
import NavLink from '@/components/header/nav-link'
import { Button } from '@/components/ui/button'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full fixed bg-white shadow-lg z-50">
      <div className="mx-auto px-8">
        <div className="flex justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <FcHome className="text-3xl" />
            <span className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-all duration-300 ease-out">
              リフォームAIポータル
            </span>
          </Link>

          <div className="hidden xl:flex iterms-center space-x-10">
            <NavLink icon={<FiHome />} text="ホーム" linkUrl="/" />
            <NavLink
              icon={<HiOutlineCalculator />}
              text="AI概算"
              linkUrl="/ai-simulation"
            />
            <NavLink
              icon={<MdOutlinePalette />}
              text="色替え"
              linkUrl="/color-simulation"
            />
            <NavLink
              icon={<FiUploadCloud />}
              text="見積送信"
              linkUrl="/estimate-upload"
            />
            <NavLink
              icon={<FaRegChartBar />}
              text="比較結果"
              linkUrl="/comparison"
            />
            <NavLink icon={<FiUser />} text="マイページ" linkUrl="/my-page" />
            <NavLink
              icon={<LuBuilding2 />}
              text="施工会社"
              linkUrl="/builder"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <CgClose className="text-3xl" />
              ) : (
                <SlMenu className="text-2xl" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavLink
              icon={<FiHome />}
              text="ホーム"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/"
            />
            <MobileNavLink
              icon={<HiOutlineCalculator />}
              text="AI概算"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/ai-simulation"
            />
            <MobileNavLink
              icon={<MdOutlinePalette />}
              text="色替え"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/color-simulation"
            />
            <MobileNavLink
              icon={<RiRobot2Line />}
              text="見積送信"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/estimate-upload"
            />
            <MobileNavLink
              icon={<FaRegChartBar />}
              text="比較結果"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/comparison"
            />
            <MobileNavLink
              icon={<FiUser />}
              text="マイページ"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/my-page"
            />
            <MobileNavLink
              icon={<LuBuilding2 />}
              text="施工会社"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/builder"
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
