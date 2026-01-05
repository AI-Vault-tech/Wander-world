# 🚀 Deployment Guide for Vercel

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Verify your email

### Step 2: Push to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/wander-world.git
git branch -M main
git push -u origin main
```

### Step 3: Import to Vercel
1. Click "Add New Project" in Vercel Dashboard
2. Import your GitHub repository
3. Vercel will auto-detect Vite configuration
4. Click "Deploy"
5. Wait 2-3 minutes for deployment
6. Your site will be live at: `https://your-project.vercel.app`

---

## Method 2: Deploy via Vercel CLI (Advanced)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# For production deployment
vercel --prod

# For preview deployment
vercel
```

### Step 4: Follow Prompts
- Set up and deploy: Yes
- Which scope: Select your account
- Link to existing project: No
- Project name: wander-world
- Directory: ./
- Override settings: No

---

## Method 3: One-Click Deploy (Fastest)

### Using this Repository
1. Push your code to GitHub
2. Click the "Deploy to Vercel" button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/wander-world)

---

## Environment Configuration

Vercel will automatically detect:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

---

## Custom Domain Setup (Optional)

### After Deployment:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   OR
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

4. Wait for DNS propagation (can take up to 48 hours)

---

## Performance Optimizations

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Compression (Brotli & Gzip)
- ✅ Image optimization
- ✅ Edge caching
- ✅ 99.99% uptime SLA

---

## Monitoring Your Site

### Vercel Dashboard Provides:
- Real-time analytics
- Performance metrics
- Error tracking
- Deployment history
- Traffic insights

---

## Troubleshooting

### Build Fails?
1. Check `package.json` has all dependencies
2. Run `npm run build` locally first
3. Check build logs in Vercel dashboard

### Site Not Loading?
1. Check deployment status
2. View function logs
3. Verify environment variables
4. Check browser console for errors

---

## Update Your Site

### Automatic Deployments:
Every push to main branch = automatic deployment

```bash
git add .
git commit -m "Update website"
git push origin main
```

Vercel will automatically:
1. Detect the push
2. Start building
3. Run tests
4. Deploy to production
5. Notify you via email

---

## Preview Deployments

Every pull request gets its own preview URL!
- Test changes before merging
- Share with team for review
- Automatic comments on GitHub PRs

---

## Cost

**Free Tier Includes:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Global CDN
- 6,000 build minutes/month

Perfect for this project! 🎉

---

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Vercel Support](https://vercel.com/support)

---

**Your beautiful website will be live in minutes!** 🌍✨
