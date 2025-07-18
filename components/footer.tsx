export function Footer() {
  return (
    <footer className="bg-muted/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GW</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80"></div>
            </div>
          </div>
          <p className="text-foreground/60">
            © 2025 Galata Waqwaya. All rights reserved.
          </p>
          <p className="text-foreground/50 text-sm mt-2">
            
          </p>
        </div>
      </div>
    </footer>
  );
}