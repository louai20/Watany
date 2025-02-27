"use client"
import { useEffect, useState } from 'react'
import React from "react";
import { Button } from "../components/ui/button"
import { Search, MapPin, Star, User, FileText, Clock, DollarSign, Building, Share2, ArrowRight, Menu } from "lucide-react"
import { ModeToggle } from "../components/modeToggle"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { FeatureCard } from "../components/featureCard"
import { DetailItem } from "../components/detailItem";
import {ComingSoonToast} from "../components/comingSoonToast";

export default function LandingPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const handleClick = () => {
    ComingSoonToast();
  };
  useEffect(() => {
    setMounted(true)

  }, [])

  if (!mounted) {
    return null // or a loading state
  }

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth relative" dir="rtl">
      {/* Single background div that changes pattern based on theme */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "var(--pattern-image)",
          backgroundSize: "var(--pattern-size)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-2 py-2">
          <div className="flex justify-between items-center">
            <a href="#" className="hover:opacity-80 transition-opacity flex items-center gap-3">
              <div className={`${theme === "dark" ? "p-1.5" : "bg-white rounded-lg p-1.5"}`}>
                <img 
                  src={theme === "dark" ? "/whiteicon.png" : "/blackicon.png"}
                  alt="وطني" 
                  className={`w-[72px] h-[75px]`}
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold">وطني</h1>
                <p className="text-base font-medium text-muted-foreground mt-2">دليل الخدمات الحكومية الرقمي</p>
              </div>
            </a>
            <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1 text-lg font-bold text-muted-foreground">
              <a 
                href="#features" 
                className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative text-lg"
              >
                الميزات الرئيسية
              </a>
              <a 
                href="#services" 
                className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative text-lg"
              >
                صفحات الخدمات
              </a>
              <a 
                href="#why" 
                className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative text-lg"
              >
                لماذا وطني؟
              </a>
              <a 
                href="#figma-image"
                className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative text-lg"
              >
                استعراض التصميم
              </a>
              <a 
                href="#download" 
                className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative text-lg"
              >
                تحميل التطبيق
              </a>
            </nav>
          </div>
              {/* Mobile Menu Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-10 w-10" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-57 mt-6">
                  <DropdownMenuItem asChild>
                    <a href="#features">الميزات الرئيسية</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#services">صفحات الخدمات</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#why">لماذا وطني؟</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#figma-image">استعراض التصميم</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#download">تحميل التطبيق</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex-shrink-0 px-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 pt-28">
        <section id="hero" className="flex flex-col md:flex-row items-center mb-16 bg-background/95 backdrop-blur-sm rounded-lg p-8">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl font-bold mb-4 text-foreground">كل الخدمات الحكومية في مكان واحد</h2>
            <p className="text-xl text-muted-foreground mb-8">
              وطني هو تطبيقك الشامل للوصول إلى جميع الخدمات الحكومية في سوريا. احصل على المعلومات الدقيقة، والإرشادات
              المفصلة، وتجارب المستخدمين الحقيقية.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full"
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
                حمل التطبيق الآن
                <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative h-96 w-full overflow-hidden bg-white dark:bg-transparent">
              <img
                src="/pageimage.png"
                alt="تطبيق وطني"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </section>

        <section id="features" className="mb-16 scroll-mt-28 bg-background/95 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">الميزات الرئيسية</h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <FeatureCard
      icon={<Search className="h-12 w-12 text-blue-500" />}
      title="بحث ذكي"
      description="ابحث عن الخدمات بسهولة باستخدام الكلمات المفتاحية أو الأسئلة الطبيعية"
      className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 
                 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative"
    />
    <FeatureCard
      icon={<MapPin className="h-12 w-12 text-green-500" />}
      title="مراكز الخدمة"
      description="اعثر على أقرب مركز خدمة حكومي مع معلومات حول ساعات العمل والازدحام"
      className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 
                 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative"
    />
    <FeatureCard
      icon={<Star className="h-12 w-12 text-yellow-500" />}
      title="تقييمات المستخدمين"
      description="اطلع على تجارب الآخرين وشارك تجربتك الخاصة مع الخدمات الحكومية"
      className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 
                 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative"
    />
    <FeatureCard
      icon={<FileText className="h-12 w-12 text-purple-500" />}
      title="معلومات مفصلة"
      description="احصل على كافة التفاصيل والمتطلبات لكل خدمة حكومية"
      className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 
                 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative"
    />
    <FeatureCard
      icon={<Clock className="h-12 w-12 text-red-500" />}
      title="تحديثات فورية"
      description="كن على اطلاع دائم بآخر التغييرات والتحديثات في الخدمات الحكومية"
      className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 
                 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative"
    />
    <FeatureCard
      icon={<User className="h-12 w-12 text-indigo-500" />}
      title="ملف شخصي مخصص"
      description="تتبع خدماتك المفضلة واحصل على توصيات مخصصة"
      className="hover:text-foreground transition-all px-6 py-4 rounded-lg hover:bg-accent/20 
                 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative"
    />
  </div>
        </section>

        <section id="services" className="bg-background/95 backdrop-blur-sm text-card-foreground rounded-lg p-8 mb-16 scroll-mt-28">
          <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-blue-50">صفحات الخدمات المفصلة</h3>
          <p className="text-lg mb-8 text-muted-foreground dark:text-blue-200">
            كل خدمة حكومية لها صفحة مخصصة توفر لك كل ما تحتاج معرفته:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DetailItem icon={<FileText className="h-8 w-8" />} text="المتطلبات والوثائق اللازمة" />
            <DetailItem icon={<DollarSign className="h-8 w-8" />} text="التكاليف والرسوم" />
            <DetailItem icon={<Building className="h-8 w-8" />} text="مواقع تقديم الخدمة" />
            <DetailItem icon={<Clock className="h-8 w-8" />} text="الوقت المتوقع للإنجاز" />
            <DetailItem icon={<Star className="h-8 w-8" />} text="تقييمات المستخدمين" />
            <DetailItem icon={<Share2 className="h-8 w-8" />} text="مشاركة المعلومات بسهولة" />
          </div>
        </section>

        <section id="why" className="text-center mb-16 scroll-mt-28 bg-background/95 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">لماذا وطني؟</h3>
          <ul className="text-lg text-muted-foreground space-y-2 max-w-2xl mx-auto">
            <li>✓ يوفر الوقت والجهد في البحث عن المعلومات الحكومية</li>
            <li>✓ يقدم معلومات دقيقة ومحدثة من مصادر رسمية</li>
            <li>✓ يسهل عملية التخطيط لزيارة المراكز الحكومية</li>
            <li>✓ يتيح للمستخدمين مشاركة تجاربهم وتحسين الخدمات</li>
            <li>✓ يدعم ذوي الاحتياجات الخاصة بميزات مخصصة</li>
          </ul>
        </section>

        <section id="figma-image" className="mb-16 scroll-mt-28 bg-background/95 backdrop-blur-sm rounded-lg p-8">
  <h3 className="text-2xl font-bold mb-8 text-center text-foreground">الواجهة التي تميز تطبيقنا</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <img 
      src="/report.png" 
      alt="تصميم التطبيق على Figma" 
      className="rounded-lg shadow-lg w-full h-auto"
    />
    <img 
      src="/main.png" 
      alt="تصميم التطبيق على Figma" 
      className="rounded-lg shadow-lg w-full h-auto"
    />
    <img 
      src="/example.png" 
      alt="تصميم التطبيق على Figma" 
      className="rounded-lg shadow-lg w-full h-auto"
    />
  </div>
</section>





        <section id="download" className="text-center mb-16 scroll-mt-28 bg-background/95 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">جاهز لتجربة أفضل مع الخدمات الحكومية؟</h3>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8 justify-center w-full px-8">
              <div className="flex flex-col items-center w-[120px]">
                <svg className="w-12 h-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1.03 3 3.69 3.69 0 0 0 2.97-1.33z"/>
                  <path d="M20 17.5c-.15.41-.54 1.17-1 1.89-.78 1.2-1.5 2.37-2.71 2.39s-1.73-.76-3.23-.76c-1.5 0-2 .74-3.23.78-1.23.04-2.18-1.29-2.96-2.49-1.62-2.34-2.87-6.62-1.19-9.5.83-1.41 2.32-2.31 3.94-2.33 1.23-.02 2.4.82 3.15.82s2.13-1.02 3.59-.87c.61.03 2.32.25 3.42 1.86-3.14 1.72-2.63 6.21.22 8.11z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center w-[110px]">
                <img 
                  src="/android.svg" 
                  alt="Android"
                  className="w-14 h-14 opacity-80"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gray-600 hover:bg-gray-900 text-white px-6 py-3 rounded-full" onClick={handleClick}>تحميل للآيفون</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full" onClick={handleClick}>تحميل للأندرويد</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background/95 backdrop-blur-sm rounded-lg p-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/whiteicon.png" 
              alt="وطني"
              className="w-6 h-6 opacity-50"
            />
            <p className="text-muted-foreground">© 2025 وطني - جميع الحقوق محفوظة</p>
          </div>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              شروط الاستخدام
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              اتصل بنا
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


