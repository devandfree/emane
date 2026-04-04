import { motion } from "motion/react";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  const months: { [key: string]: number } = {
    "Janvier": 0, "Février": 1, "Mars": 2, "Avril": 3, "Mai": 4, "Juin": 5,
    "Juillet": 6, "Août": 7, "Septembre": 8, "Octobre": 9, "Novembre": 10, "Décembre": 11
  };

  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split(" ");
    return new Date(parseInt(year), months[month], parseInt(day));
  };

  const sortedPosts = [...blogPosts].sort((a, b) => 
    parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Link to="/" className="text-silver-500 hover:text-white transition-colors flex items-center text-sm font-bold uppercase tracking-widest mb-8">
            <ChevronRight size={16} className="rotate-180 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Mon Blog</h1>
          <p className="text-silver-400 text-xl max-w-2xl">
            Partage d'expertises, d'analyses et de réflexions sur la transformation digitale et l'excellence opérationnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-silver-900/40 silver-border rounded-sm overflow-hidden hover:bg-silver-800/40 transition-all flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-sm">
                    {post.category}
                  </div>
                </div>
              </Link>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-[10px] text-silver-500 font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-silver-300 transition-colors leading-tight">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-silver-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-silver-400/10">
                  <div className="flex items-center text-xs font-bold text-white">
                    <div className="w-6 h-6 bg-silver-800 rounded-full overflow-hidden mr-2 silver-border">
                      <img 
                        src="https://www.hebergeur-image.com/upload/143.105.152.103-69ce8997cf15a.jpg" 
                        alt={post.author} 
                        className="w-full h-full object-cover grayscale"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {post.author}
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-white hover:text-silver-400 transition-colors flex items-center text-xs font-bold uppercase tracking-widest">
                    Lire plus <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
