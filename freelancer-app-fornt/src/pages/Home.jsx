import { Link } from "react-router-dom";
import { TbFishHook } from "react-icons/tb";
import {
  HiOutlineUser,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineBriefcase,
} from "react-icons/hi";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-0 flex flex-col">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-white shadow-md overflow-hidden">
        <div className="absolute left-0 right-0 top-0 bottom-0 opacity-5 bg-[url('/public/user.jpg')] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <span className="mx-auto my-auto  inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 shadow-lg">
              <TbFishHook className="text-primary-700 w-8 h-8" />
            </span>
          </div>
          <h1 className="text-5xl font-extrabold text-primary-800 mb-4 tracking-tight">
            قلاب
          </h1>
          <p className="text-xl text-secondary-700 max-w-2xl mx-auto mb-6">
            قلاب، جایی که کار و کاربلد به قلاب می‌افتن!
            <br /> پلتفرم هوشمند برای اتصال کارفرما و فریلنسر، مدیریت پروژه و
            همکاری حرفه‌ای.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="px-8 py-3 rounded-lg bg-primary-700 text-white font-bold text-lg shadow hover:bg-primary-800 transition"
            >
              شروع کنید
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary-800 text-center mb-10">
          چرا قلاب؟
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <HiOutlineUser className="text-4xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">پروفایل حرفه‌ای</h3>
            <p className="text-secondary-600 text-center">
              ساخت رزومه و پروفایل تخصصی برای نمایش مهارت‌ها و سوابق
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <HiOutlineLightBulb className="text-4xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">پروژه‌های متنوع</h3>
            <p className="text-secondary-600 text-center">
              دسترسی به پروژه‌های واقعی و فرصت‌های همکاری متنوع
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <HiOutlineCheckCircle className="text-4xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">امنیت و اعتماد</h3>
            <p className="text-secondary-600 text-center">
              تضمین امنیت اطلاعات و پرداخت‌ها، مدیریت حرفه‌ای کاربران
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <HiOutlineBriefcase className="text-4xl text-primary-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">مدیریت پروژه پیشرفته</h3>
            <p className="text-secondary-600 text-center">
              ابزارهای کامل برای مدیریت، پیگیری و ارزیابی پروژه‌ها و پیشنهادها
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 bg-primary-50">
        <h2 className="text-2xl font-bold text-primary-800 text-center mb-8">
          مسیر همکاری در قلاب
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-3xl mb-2">1️⃣</span>
            <p className="text-secondary-700 font-medium">
              ثبت‌نام و تکمیل پروفایل
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-3xl mb-2">2️⃣</span>
            <p className="text-secondary-700 font-medium">
              تعریف پروژه یا ارسال پیشنهاد
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-3xl mb-2">3️⃣</span>
            <p className="text-secondary-700 font-medium">
              همکاری، مدیریت و تسویه پروژه
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">
          همین حالا به قلاب بپیوندید!
        </h2>
        <p className="text-secondary-700 mb-6">
          فرصت‌های جدید شغلی و همکاری حرفه‌ای منتظر شماست. همین الان ثبت‌نام
          کنید و اولین پروژه خود را شروع کنید.
        </p>
        <Link
          to="/auth"
          className="inline-block px-10 py-3 rounded-lg bg-primary-700 text-white font-bold text-lg shadow hover:bg-primary-800 transition"
        >
          ثبت‌نام رایگان
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-secondary-50 text-center text-secondary-500 text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link to="/auth" className="hover:underline">
            ورود / ثبت‌نام
          </Link>
          <Link to="/complete-profile" className="hover:underline">
            تکمیل پروفایل
          </Link>
          <Link to="/owner/dashboard" className="hover:underline">
            داشبورد کارفرما
          </Link>
          <Link to="/freelancer/dashboard" className="hover:underline">
            داشبورد فریلنسر
          </Link>
          <Link to="/admin/dashboard" className="hover:underline">
            داشبورد ادمین
          </Link>
        </div>
        <div>
          &copy; {new Date().getFullYear()} قلاب - تمامی حقوق محفوظ است.
        </div>
      </footer>
    </div>
  );
}

export default Home;
