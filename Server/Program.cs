using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace Appreciation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .UseUrls("http://*:5000")
                .Build();

            host.Run();
        }
    }
}
