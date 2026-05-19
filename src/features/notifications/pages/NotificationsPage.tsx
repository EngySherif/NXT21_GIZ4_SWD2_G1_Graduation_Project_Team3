
// بيانات وهمية مطابقة تماماً لشكل الإشعارات في التصميم
const notificationsData = {
  today: [
    {
      id: 1,
      type: 'like',
      user: 'Elena L.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      action: 'liked your review of',
      target: 'The Shadow of the Wind',
      time: '2 hours ago',
      bookCover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100', // غلاف كتاب افتراضي
    },
    {
      id: 2,
      type: 'comment',
      user: 'Marcus Reed',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      action: 'commented: "Totally agree with your point about the pacing in Chapter 4!"',
      quote: '"The pacing was deliberate, forcing the reader to..."',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'follow',
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      action: 'started following you',
      time: '8 hours ago',
      hasFollowBack: true,
    },
  ],
  thisWeek: [
    {
      id: 4,
      type: 'trending',
      icon: '📈',
      action: 'Your post "Top 10 Gothic Novels for Rainy Days" is trending in',
      target: '#BookRecommendations!',
      stats: '👁️ 1.2k  💬 240',
      time: '2 days ago',
    },
    {
      id: 5,
      type: 'progress',
      icon: '📚',
      action: 'You reached 75% of your 2024 Reading Goal! 3 books to go.',
      progress: 75,
      time: '4 days ago',
    },
  ],
};

export function NotificationsPage() {
  return (
    <div className="flex-1 bg-white p-4 sm:p-6 lg:p-8 font-sans text-left" dir="ltr">
      
      {/* هيدر الصفحة الرئيسي */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1A0C05]">Notifications</h1>
          <p className="text-xs text-gray-400 mt-0.5">Stay updated with your reading community</p>
        </div>
        <button className="text-xs font-semibold text-[#261308] hover:underline">
          Mark all as read
        </button>
      </div>

      {/* تقسيم المحتوى: الإشعارات على اليسار والـ Sidebar على اليمين */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* عمود الإشعارات الأساسي */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* قسم إشعارات اليوم (TODAY) */}
          <div>
            <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">Today</h2>
            <div className="flex flex-col gap-3">
              {notificationsData.today.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`p-4 rounded-xl border border-gray-150 flex gap-3 items-start transition-all hover:bg-gray-50/50 ${notif.type === 'follow' ? 'bg-[#FFF9F6] border-[#FDEEE7]' : 'bg-white'}`}
                >
                  <img src={notif.avatar} alt={notif.user} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold text-[#1A0C05]">{notif.user}</span> {notif.action}{' '}
                      {notif.target && <span className="font-semibold italic text-[#261308]">{notif.target}</span>}
                    </p>
                    {notif.quote && (
                      <div className="mt-2 p-2.5 bg-[#F9F9F9] rounded-lg border border-gray-100 text-[11px] italic text-gray-500 font-serif">
                        {notif.quote}
                      </div>
                    )}
                    <span className="text-[10px] text-gray-400 block mt-1">{notif.time}</span>
                  </div>
                  
                  {/* لو كان لايك يعرض غلاف الكتاب كالمطلوب */}
                  {notif.bookCover && (
                    <img src={notif.bookCover} alt="Book" className="w-8 h-11 object-cover rounded-md border border-gray-200" />
                  )}

                  {/* لو كان فولو يظهر زرار المتابعة */}
                  {notif.hasFollowBack && (
                    <button className="bg-[#261308] text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-[#3d2516] transition-colors whitespace-nowrap">
                      Follow Back
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* قسم إشعارات هذا الأسبوع (THIS WEEK) */}
          <div>
            <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">This Week</h2>
            <div className="flex flex-col gap-3">
              {notificationsData.thisWeek.map((notif) => (
                <div key={notif.id} className="p-4 bg-white rounded-xl border border-gray-150 flex gap-3 items-start transition-all hover:bg-gray-50/50">
                  <div className="w-9 h-9 bg-[#F9F9F9] rounded-full flex items-center justify-center text-sm border border-gray-100">
                    {notif.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {notif.action} {notif.target && <span className="font-bold text-[#261308]">{notif.target}</span>}
                    </p>
                    {notif.stats && <span className="text-[10px] font-medium text-gray-500 block mt-1">{notif.stats}</span>}
                    
                    {/* شريط تقدم الهدف القرائي */}
                    {notif.progress && (
                      <div className="mt-2.5 max-w-xs">
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#5C3E2B] h-full rounded-full" style={{ width: `${notif.progress}%` }}></div>
                        </div>
                      </div>
                    )}
                    <span className="text-[10px] text-gray-400 block mt-1.5">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* العمود الأيمن الجانبي (Trending & Who to Follow) */}
        <div className="flex flex-col gap-5">
          
          {/* كارت الأكثر تداولاً */}
          <div className="bg-white p-4 rounded-xl border border-gray-150">
            <h3 className="text-xs font-bold text-[#1A0C05] mb-3">Trending in BookShare</h3>
            <div className="flex flex-col gap-3 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 block">Trending in Fiction</span>
                <span className="font-bold text-[#1A0C05] hover:underline cursor-pointer">#DarkAcademia</span>
                <span className="text-[10px] text-gray-400 block">12.5k posts</span>
              </div>
              <hr className="border-gray-100" />
              <div>
                <span className="text-[10px] text-gray-400 block">New Release</span>
                <span className="font-bold text-[#1A0C05] hover:underline cursor-pointer">The Last Librarian</span>
                <span className="text-[10px] text-gray-400 block">8.2k readers</span>
              </div>
              <hr className="border-gray-100" />
              <div>
                <span className="text-[10px] text-gray-400 block">Community Event</span>
                <span className="font-bold text-[#1A0C05] hover:underline cursor-pointer">October Book Haul</span>
                <span className="text-[10px] text-gray-400 block">3.1k participating</span>
              </div>
              <button className="text-[11px] font-semibold text-[#261308] mt-2 text-center w-full hover:underline">
                Show more
              </button>
            </div>
          </div>

          {/* كارت اقتراحات المتابعة */}
          <div className="bg-white p-4 rounded-xl border border-gray-150">
            <h3 className="text-xs font-bold text-[#1A0C05] mb-3">Who to follow</h3>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-8 h-8 rounded-full object-cover" alt="User" />
                  <div>
                    <span className="font-bold text-xs text-[#1A0C05] block">Jane Doe</span>
                    <span className="text-[10px] text-gray-400 block">Sci-Fi Specialist</span>
                  </div>
                </div>
                <button className="border border-gray-300 text-[#1A0C05] font-bold text-[10px] px-3 py-1 rounded-full hover:bg-gray-50">Follow</button>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" className="w-8 h-8 rounded-full object-cover" alt="User" />
                  <div>
                    <span className="font-bold text-xs text-[#1A0C05] block">Tom Books</span>
                    <span className="text-[10px] text-gray-400 block">Classic Literature</span>
                  </div>
                </div>
                <button className="border border-gray-300 text-[#1A0C05] font-bold text-[10px] px-3 py-1 rounded-full hover:bg-gray-50">Follow</button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
