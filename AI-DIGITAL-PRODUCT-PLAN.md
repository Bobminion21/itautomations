# AI Digital Product Mass Production Plan
## Built for Peter's Mac Environment (Claude Code + Chrome + Python + Node)
### Created: 2026-02-10

---

## EXECUTIVE SUMMARY

After researching current market conditions, tool availability, and AI capabilities, here is the
ranking of product categories from **fastest to revenue** to slowest:

| Rank | Product | Can Build Today? | AI Does 90%+? | Time to First $$ |
|------|---------|-----------------|----------------|-------------------|
| 1 | Printable PDFs (Etsy) | YES | YES | 1-2 weeks |
| 2 | Google Sheets Templates | YES | YES | 1-2 weeks |
| 3 | KDP Coloring Books | YES (with setup) | 85% | 2-4 weeks |
| 4 | Notion Templates | YES | YES | 2-3 weeks |
| 5 | Canva Templates | PARTIAL | 60% | 3-4 weeks |

**Bottom line: Printable PDFs and Google Sheets are the fastest paths to money. Start there TODAY.**

---

## 1. KDP COLORING BOOK PIPELINE

### Can AI Generate Coloring Pages Programmatically? YES.

There are three approaches, ranked by practicality:

#### Approach A: Pure SVG Generation (FREE, works TODAY)
Claude Code can generate SVG coloring pages directly as code. SVG is vector line art by definition --
it IS coloring book art. No image AI needed.

**How it works:**
- Claude generates SVG markup for each coloring page design
- SVG contains only black outlines on white background (perfect for coloring books)
- Convert SVG pages to PDF using Chrome headless
- Combine into single interior PDF

**What Claude can generate as SVG:**
- Mandalas (geometric patterns -- perfect for algorithmic generation)
- Floral/botanical patterns
- Geometric animals (low-poly style)
- Paisley patterns
- Zentangle-style designs
- Decorative frames and borders
- Simple character outlines
- Abstract patterns

**Limitation:** Claude cannot generate photorealistic or highly detailed figurative art as SVG.
But mandalas, geometric, and pattern-based designs are actually the TOP sellers on KDP.

#### Approach B: Stable Diffusion (FREE, requires setup)
- Install AUTOMATIC1111 locally on Mac (requires ~8GB disk)
- Use prompts like: "coloring book page, black and white line art, thick outlines, no shading,
  [subject], white background"
- Use ControlNet lineart model for consistent style
- Post-process to ensure pure black/white

**Setup time:** 2-4 hours (one-time)
**Per image:** 30 seconds generation + 2 min post-processing

#### Approach C: Free Online AI Tools
- Leonardo.ai (free tier: 150 tokens/day, ~30 images)
- Ideogram.ai (free tier: ~25 images/day)
- Bing Image Creator (free, unlimited, DALL-E 3 based)
- Prompt: "simple black and white coloring book page line art of [subject], thick clean outlines,
  no shading, no color, white background"

### Exact Workflow: Prompt to KDP Upload

```
Step 1: Choose niche + plan 50 page themes (15 min)
   |
Step 2: Generate 50 SVG coloring pages via Claude Code (2-3 hours)
   |     OR generate 50 images via free AI tools (2-3 hours)
   |
Step 3: Convert each page to correct size (8.5" x 11") with margins
   |     Python script handles this automatically
   |
Step 4: Assemble into single PDF interior
   |     - Page 1: Title page
   |     - Page 2: Copyright/blank
   |     - Pages 3-102: Alternating coloring page + blank back page
   |     - Total: ~102 pages for 50 designs
   |
Step 5: Create cover (use Canva free or AI-generated)
   |     - Cover size for 102 pages at 8.5x11: ~17.473" x 11.25"
   |
Step 6: Upload to KDP
   |     - Set price: $6.99-$9.99
   |     - Category: coloring books
   |     - Write description + keywords (Claude does this)
   |
Step 7: Publish (review takes 24-72 hours)
```

### Tools Needed (ALL FREE)

| Tool | Purpose | Cost |
|------|---------|------|
| Claude Code | Generate SVG pages + descriptions | Already have |
| Python + svgwrite | SVG creation library | `pip3 install svgwrite` |
| Python + reportlab OR fpdf2 | PDF assembly | `pip3 install fpdf2` |
| Chrome headless | SVG to PDF rendering | Already have |
| Canva (free) | Book cover design | Free |
| KDP account | Publishing | Free |

### Installation Command (One-Time Setup)
```bash
pip3 install svgwrite fpdf2 cairosvg Pillow
```

### Three Target Niches (Based on Research)

**Niche 1: Mandala Coloring Books for Adults**
- Search volume: 813+ monthly (high)
- Competition: Medium (but AI lets us produce faster than anyone)
- Price: $7.99-$9.99
- Why: Mandalas are PERFECT for algorithmic SVG generation. Claude can generate
  infinite unique mandala patterns. This is the #1 easiest niche.
- Book titles: "50 Intricate Mandalas", "Mandala Meditation", "Easy Mandalas for Beginners"

**Niche 2: Floral & Botanical Patterns**
- Search volume: High (flowers + coloring book = proven combo)
- Competition: Medium
- Price: $7.99-$9.99
- Why: Flowers, leaves, and botanical elements translate well to SVG line art.
  Can be generated programmatically with natural-looking bezier curves.
- Book titles: "Flower Garden Coloring Book", "Botanical Beauty", "Wildflower Designs"

**Niche 3: Geometric Animals (Low-Poly Style)**
- Search volume: Growing trend
- Competition: Lower (more specific niche)
- Price: $8.99-$9.99
- Why: Geometric/low-poly animal designs are made of triangles and polygons --
  trivial for code to generate. Trendy, unique, and differentiated from hand-drawn books.
- Book titles: "Geometric Animals", "Polygon Zoo", "Low-Poly Wildlife"

### Time Estimate Per Complete Book
| Step | Time |
|------|------|
| Niche research + planning | 30 min |
| Generate 50 SVG pages | 2-3 hours (Claude does the work) |
| Build PDF assembly script | 1 hour (one-time, reuse forever) |
| Assemble interior PDF | 5 min (automated) |
| Create cover | 30 min |
| KDP listing (title, description, keywords) | 30 min |
| **TOTAL first book** | **~5-6 hours** |
| **Each subsequent book** | **~3-4 hours** |

### Revenue Expectations
- Price: $7.99-$9.99
- KDP royalty (60% for $9.99+): ~$3.00-$4.00 per sale
- Expected sales per book: 5-30/month (depends on niche + keywords)
- With 10 books published: $150-$1,200/month
- Strategy: Volume. Publish 2-3 books per week. After 3 months = 25-35 books.
- Conservative estimate at 25 books: $375-$3,000/month

### Can We Generate a 50-Page Book Interior TODAY? YES.

Here is the exact process:

```bash
# Step 1: Install dependencies
pip3 install svgwrite cairosvg fpdf2 Pillow

# Step 2: Claude Code generates the Python script that:
#   - Creates 50 unique mandala SVG files
#   - Converts each to PNG at 300 DPI (2550 x 3300 pixels for 8.5x11)
#   - Assembles into single PDF with blank backing pages
#   - Adds title page and copyright page

# Step 3: Run the script
python3 generate_coloring_book.py --niche mandala --pages 50 --output book_interior.pdf

# Step 4: Upload book_interior.pdf to KDP
```

Claude Code can write this entire pipeline as a reusable Python script. Once built, generating
a new book is just changing the niche parameter and running the script again.

---

## 2. NOTION TEMPLATE FACTORY

### Can AI Design and Build Notion Templates? YES.

Notion templates are just structured Notion pages. The workflow is:
1. Claude designs the template structure (databases, properties, views, formulas)
2. Peter creates it in Notion (following Claude's exact instructions)
3. OR: Use the Notion API to create templates programmatically

### Exact Workflow

```
Step 1: Claude designs template structure
   |     - Database schemas (columns, types, formulas)
   |     - Page layouts and sections
   |     - Linked databases and relations
   |     - Views (table, board, calendar, gallery)
   |     - Pre-filled example data
   |
Step 2: Create in Notion
   |     Option A: Manual (follow Claude's step-by-step instructions) -- 30-60 min each
   |     Option B: Notion API via Python script -- 10-15 min each (after setup)
   |
Step 3: Package for sale
   |     - Share > "Share to web" > Enable "Allow duplicate as template"
   |     - Set: Link expiration = Never
   |     - Set: Allow editing = Off
   |     - Set: Allow commenting = Off
   |     - Set: Allow duplicate as template = On
   |     - Copy the share link
   |
Step 4: List on Gumroad or Etsy
   |     - Create product listing
   |     - Product = the Notion duplicate link (delivered after purchase)
   |     - Add screenshots, description, feature list
   |     - Price: $5-$29 depending on complexity
   |
Step 5: Optional: Bundle related templates
        - "Ultimate Student Pack" = 5 templates for $19
        - "Small Business Bundle" = 3 templates for $29
```

### Notion API Approach (Faster After Setup)

```bash
pip3 install notion-client

# Claude writes a Python script that:
# 1. Connects to Notion API
# 2. Creates pages with databases, properties, views
# 3. Pre-fills sample data
# 4. Outputs the shareable link
```

**One-time setup:** Get Notion API key (free), create integration, share workspace.
**Per template after setup:** 10-15 minutes.

### Can We Create 5-10 Templates Today? YES.

Using the manual approach (Claude gives instructions, Peter builds in Notion), you can create
5-10 templates in a single day. Each takes 30-60 minutes.

### Niches That Overlap With Peter's Google Sheets Templates

Peter's existing sheets are productivity/business focused. Notion equivalents:

| Google Sheet Template | Notion Template Equivalent |
|-----------------------|---------------------------|
| Budget tracker | Personal Finance Dashboard |
| Project planner | Project Management Hub |
| Habit tracker | Habit Tracker + Streak Counter |
| Invoice template | Freelancer Client & Invoice Manager |
| Inventory tracker | Small Business Inventory System |

### 10 High-Demand Notion Templates to Build

1. **ADHD Life Planner** ($12-$19) -- 120+ monthly searches, growing demand
2. **Second Brain / Knowledge Base** ($15-$25) -- high search volume, low competition
3. **Content Creator Dashboard** ($9-$15) -- social media calendar + analytics tracker
4. **Job Application Tracker** ($7-$12) -- especially popular Jan-March
5. **Meal Planner + Grocery List** ($7-$12) -- health niche, recurring interest
6. **Student Semester Planner** ($7-$12) -- back-to-school spikes
7. **Wedding Planner** ($15-$25) -- wedding printables are Etsy top sellers
8. **Book Reading Tracker** ($5-$9) -- proven seller, avid reader community
9. **Small Business CRM** ($15-$29) -- high perceived value
10. **Freelancer Income + Tax Tracker** ($9-$19) -- overlap with Google Sheets expertise

### Pricing & Revenue

- Simple templates: $5-$9
- Complex templates: $12-$29
- Bundles: $19-$49
- Expected sales per template: 10-50/month on Gumroad/Etsy
- With 10 templates: $100-$1,000/month
- With bundles and marketing: $200-$2,000/month

### Time Estimate
| Step | Time |
|------|------|
| Claude designs template | 15 min |
| Peter builds in Notion | 30-60 min |
| Screenshots + listing | 20 min |
| **Total per template** | **~1-1.5 hours** |
| **5 templates in a day** | **5-8 hours** |

### AI Does 90%+ of the Work? YES.

Claude designs the entire template: every database, property, formula, view, and piece of
sample data. Peter just follows the instructions to click-and-create in Notion. The creative
and structural work is 100% AI.

---

## 3. CANVA TEMPLATE BATCH PRODUCTION

### Can AI Generate Canva-Compatible Designs? PARTIALLY.

**The problem:** Canva's API requires Enterprise access for programmatic template creation.
Individual creators cannot use the API.

**The workaround:** Create designs as HTML/CSS, then recreate in Canva manually, OR sell the
templates as standalone files (not Canva templates).

### Realistic Workflow

```
Option A: HTML/CSS to Image Templates (Sell as PNG/PDF)
   - Claude generates HTML/CSS for social media templates
   - Chrome headless renders to PNG at exact social media dimensions
   - Sell as downloadable template packs (not Canva-native)
   - Buyer opens in any editor (Canva, Photoshop, etc.)
   - DOWNSIDE: Less appealing than "click to edit in Canva"

Option B: Claude Designs, Peter Builds in Canva (Manual)
   - Claude specifies exact layout: colors, fonts, element positions, sizes
   - Peter recreates in Canva (each template: 10-15 min)
   - Save as Canva template link
   - DOWNSIDE: Manual work per template

Option C: SVG Templates (Best Compromise)
   - Claude generates SVG templates programmatically
   - SVGs can be imported into Canva as editable elements
   - Sell as SVG packs or import into Canva and share as template links
   - ADVANTAGE: Automated creation + Canva compatible
```

### Social Media Template Dimensions

| Platform | Size (px) | Aspect Ratio |
|----------|-----------|--------------|
| Instagram Post | 1080 x 1080 | 1:1 |
| Instagram Story | 1080 x 1920 | 9:16 |
| Pinterest Pin | 1000 x 1500 | 2:3 |
| LinkedIn Post | 1200 x 1200 | 1:1 |
| Facebook Post | 1200 x 630 | ~2:1 |
| Twitter/X Post | 1600 x 900 | 16:9 |
| YouTube Thumbnail | 1280 x 720 | 16:9 |

### What We CAN Do Today

**Fastest approach: HTML/CSS Template Packs**

```bash
# Claude generates HTML templates with CSS styling
# Chrome headless renders each to PNG/PDF

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --print-to-pdf=template.pdf \
  --no-margins \
  template.html
```

**Template pack ideas:**
- Instagram Quote Post Pack (20 designs) -- $7-$12
- Pinterest Pin Templates (20 designs) -- $7-$12
- LinkedIn Carousel Templates (10 designs) -- $9-$15
- Social Media Bundle (all platforms, 50+ designs) -- $19-$29

### Honest Assessment

| Metric | Rating |
|--------|--------|
| Can AI do 90%+ of work? | **60%** -- Canva-native requires manual recreation |
| Time per template | 5 min (HTML) or 15 min (Canva manual) |
| Selling price | $7-$29 per pack |
| Monthly volume | 5-30 sales per pack |
| **Recommendation** | **Lower priority. Do this AFTER printables and sheets.** |

**Alternative that IS fully automatable:** Sell social media templates as editable SVG/HTML
files rather than Canva-native templates. Different market, but zero manual work.

---

## 4. GOOGLE SHEETS TEMPLATE EXPANSION

### Peter Already Has 5 Templates. This Is the Fastest Expansion Path.

Peter already knows the workflow: Code.gs + SheetSetup.gs + Google Apps Script deployment.
Claude Code can generate complete, working templates with zero manual coding.

### 10 High-Demand Templates to Build NOW

Based on market research (underserved niches on Etsy with high search volume):

| # | Template | Search Demand | Competition | Price | Why It's Underserved |
|---|----------|--------------|-------------|-------|---------------------|
| 1 | **Freelancer Income & Tax Tracker** | High | Medium | $9-$15 | Few target freelancers specifically |
| 2 | **Rental Property Manager** | High | Low | $12-$19 | Landlords need simple tools, not full software |
| 3 | **Wedding Budget Planner** | Very High | Medium | $7-$12 | Seasonal but massive (wedding niche is Etsy gold) |
| 4 | **Debt Payoff Calculator (Snowball/Avalanche)** | High | Low | $5-$9 | Calculators with visual charts sell well |
| 5 | **Small Business Expense Report** | High | Low | $9-$15 | Businesses will pay more for professional tools |
| 6 | **Meal Planner + Grocery List Generator** | High | Medium | $5-$9 | Health/wellness crossover appeal |
| 7 | **Teacher Grade Book & Attendance** | Medium | Low | $7-$12 | Teachers actively buy digital tools |
| 8 | **Etsy Seller Profit Calculator** | High | Low | $9-$15 | Meta: sell to the sellers (they're already on Etsy!) |
| 9 | **Home Renovation Budget Tracker** | Medium | Low | $7-$12 | Specific niche, high purchase intent |
| 10 | **Subscription Tracker & Bill Manager** | High | Medium | $5-$9 | Everyone has subscriptions, few track them |

### Can We Create Code.gs + SheetSetup.gs Right Now? YES.

This is Claude Code's strongest capability. The workflow:

```
Step 1: Peter describes the template concept (2 min)
   |
Step 2: Claude Code generates:
   |     - Code.gs (Apps Script with menus, automation, formulas)
   |     - SheetSetup.gs (creates all sheets, formatting, headers, data validation)
   |     - config.gs (settings and constants)
   |     - README with setup instructions
   |
Step 3: Peter creates new Google Sheet, opens Script Editor
   |
Step 4: Paste generated code, run SheetSetup function
   |
Step 5: Template is created automatically with:
   |     - Multiple tabs (dashboards, data entry, reports)
   |     - Conditional formatting
   |     - Data validation dropdowns
   |     - Charts and graphs
   |     - Custom menu items
   |     - Protected ranges
   |
Step 6: Test, screenshot, list on Etsy/Gumroad
```

### Time Estimate Per Template

| Step | Time |
|------|------|
| Concept + requirements | 10 min |
| Claude generates all code | 15-30 min |
| Deploy to Google Sheet | 5 min |
| Test + polish | 15-30 min |
| Screenshots + listing | 20 min |
| **Total per template** | **~1-1.5 hours** |

### Revenue Expectations

- Average price: $7-$15
- Etsy + Gumroad combined sales per template: 10-40/month
- With 15 total templates (5 existing + 10 new): $150-$2,400/month
- Best sellers can do 50-100+ sales/month at peak

### AI Does 90%+ of the Work? YES, absolutely.

Claude generates all the Apps Script code, sheet structures, formulas, formatting rules,
and even the Etsy listing descriptions. Peter's work is: paste code, run function, screenshot.

---

## 5. PRINTABLE PDFs (ETSY) -- THE #1 FASTEST MONEY MAKER

### Why This Is #1

- Etsy has 90+ million active buyers looking for printables
- $74 billion digital product market
- Zero inventory, zero shipping, 100% profit margin (minus Etsy fees ~12%)
- Top sellers earn $4,000-$50,000/month from printables alone
- AI can generate the entire product: design, layout, content

### What Sells Best on Etsy (Printable PDFs)

| Category | Monthly Search Volume | Price Range | Difficulty |
|----------|-----------------------|-------------|------------|
| Digital wall art | Very High | $3-$8 | Easy |
| Planners (daily/weekly/monthly) | Very High | $5-$15 | Easy |
| Wedding printables | Very High | $5-$25 | Medium |
| Checklists & trackers | High | $3-$7 | Very Easy |
| Educational worksheets | High | $3-$12 | Easy |
| Greeting cards | High | $3-$5 | Easy |
| Stickers (print & cut) | Very High | $2-$5 | Medium |
| Affirmation/quote cards | Medium | $3-$7 | Very Easy |

### Can AI Generate These as HTML to PDF? YES.

This is the core pipeline. Claude Code generates HTML+CSS, Chrome renders to PDF.

### Exact Technical Workflow

```
Step 1: Claude Code generates HTML file with:
   |     - Exact print dimensions (e.g., 8.5x11", A4, 5x7")
   |     - CSS @page rules for print
   |     - High-quality typography (Google Fonts)
   |     - Vector graphics (SVG inline)
   |     - Print-optimized colors
   |
Step 2: Chrome headless renders to PDF at 300 DPI
   |     Command:
   |     "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
   |       --headless --print-to-pdf=output.pdf \
   |       --no-margins --print-to-pdf-no-header \
   |       file:///path/to/template.html
   |
Step 3: Upload PDF to Etsy as digital download
```

### OR: Use Puppeteer/Node.js for More Control

```javascript
const puppeteer = require('puppeteer');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('file:///path/to/template.html');
await page.pdf({
  path: 'output.pdf',
  width: '8.5in',
  height: '11in',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});
```

### Etsy File Requirements

- Format: PDF (primary), also provide JPG/PNG versions
- Resolution: 300 DPI minimum
- File size: Under 20 MB per file
- Common sizes: 8.5x11" (US Letter), A4, 5x7", 4x6", 8x10"
- Color mode: RGB for digital, CMYK recommended for print (but RGB is accepted)

### 10 Printable Products to Build TODAY

| # | Product | Time to Build | Price | Difficulty |
|---|---------|---------------|-------|------------|
| 1 | **Minimalist Daily Planner (Undated)** | 1 hour | $5 | Very Easy |
| 2 | **Monthly Budget Worksheet** | 1 hour | $5 | Very Easy |
| 3 | **Habit Tracker (30-day)** | 45 min | $3 | Very Easy |
| 4 | **Grocery List with Categories** | 30 min | $3 | Very Easy |
| 5 | **Weekly Meal Planner** | 45 min | $4 | Very Easy |
| 6 | **Reading Log / Book Tracker** | 45 min | $3 | Very Easy |
| 7 | **Minimalist Wall Art Set (5 prints)** | 2 hours | $5-$8 | Easy |
| 8 | **Goal Setting Worksheet** | 45 min | $4 | Very Easy |
| 9 | **Moving Checklist** | 1 hour | $4 | Easy |
| 10 | **Cleaning Schedule (Weekly/Monthly)** | 45 min | $4 | Very Easy |

### Price Strategy

- Individual printables: $2-$8
- Bundles (5-10 related items): $9-$19
- Mega bundles (20+ items): $19-$39
- Bundles convert better and have higher average order value

### Revenue Expectations

- Per listing: 5-50 sales/month (varies by niche and SEO)
- With 20 listings: $200-$2,000/month
- With bundles: Add 30-50% to revenue
- Top sellers with 50+ listings: $2,000-$10,000/month
- Etsy fees: ~12% (listing fee $0.20 + transaction fee 6.5% + payment processing 3% + $0.25)

### Time Estimate

| Step | Time |
|------|------|
| Claude generates HTML/CSS | 10-20 min |
| Review + adjust | 5-10 min |
| Chrome renders to PDF | 1 min |
| Create Etsy listing (title, tags, description) | 15 min |
| **Total per printable** | **30-45 min** |
| **Bundle of 5 printables** | **3-4 hours** |

### AI Does 90%+ of the Work? YES -- arguably 95%+.

Claude Code generates the complete HTML/CSS with all layouts, typography, and design. Claude
also writes the Etsy listing title, description, and SEO tags. Peter's work: review the PDF,
upload to Etsy.

---

## ACTION PLAN: WHAT TO BUILD TODAY

### Phase 1: TODAY (Hours 1-8)

**Morning: Set Up the Pipeline**
1. Install Python packages: `pip3 install svgwrite fpdf2 cairosvg Pillow`
2. Install Node packages: `npm install -g puppeteer` (for PDF rendering)
3. Test Chrome headless PDF rendering with a simple HTML file
4. Set up Etsy seller account (if not already done) -- takes 10 min

**Afternoon: Build First Products**
5. Build 5 printable PDFs using the HTML-to-PDF pipeline:
   - Daily Planner (undated)
   - Monthly Budget Worksheet
   - Habit Tracker
   - Grocery List
   - Weekly Meal Planner

6. Build 1 Google Sheets template:
   - Freelancer Income & Tax Tracker (high demand, low competition)

**Evening: List Everything**
7. Create Etsy listings for all 5 printables
8. Create Etsy/Gumroad listing for the Google Sheet
9. Create a "Planner Bundle" listing combining all 5 printables

### Phase 2: THIS WEEK (Days 2-7)

| Day | Task | Products |
|-----|------|----------|
| Day 2 | 5 more printables + 1 Google Sheet | Reading Log, Goal Setting, Cleaning Schedule, Moving Checklist, Wall Art Set + Debt Payoff Calculator |
| Day 3 | First KDP coloring book (mandala) | 50-page mandala coloring book interior + cover |
| Day 4 | 3 Notion templates + listings | ADHD Planner, Second Brain, Content Creator Dashboard |
| Day 5 | 5 more printables + bundles | Wedding checklist, Baby milestone, Fitness tracker, Recipe cards, Password log + create bundles |
| Day 6 | Second KDP coloring book (floral) | 50-page floral coloring book |
| Day 7 | 2 more Google Sheets + 2 Notion templates | Rental Property Manager, Etsy Seller Calculator + Job Tracker, Meal Planner |

### Phase 2 Totals After Week 1:
- Etsy printable listings: 15-20 individual + 3-5 bundles
- Google Sheets templates: 3-4 new
- KDP coloring books: 2 published
- Notion templates: 5

### Phase 3: WEEKS 2-4 (Scale)
- Publish 2-3 KDP coloring books per week
- Add 5-10 new printables per week
- Create 2-3 new Google Sheets per week
- Build out Notion templates to 10-15 total
- Start creating bundles and "mega packs"
- Optimize Etsy SEO based on early data

---

## MONTHLY REVENUE PROJECTIONS (Conservative)

### Month 1 (Building phase)
| Product | Listings | Sales/mo | Avg Price | Revenue |
|---------|----------|----------|-----------|---------|
| Etsy Printables | 20 | 40-100 | $4 | $160-$400 |
| Google Sheets | 8 | 15-40 | $9 | $135-$360 |
| KDP Books | 4 | 20-60 | $3.50 royalty | $70-$210 |
| Notion Templates | 5 | 10-25 | $10 | $100-$250 |
| **Total** | **37** | | | **$465-$1,220** |

### Month 3 (Traction phase)
| Product | Listings | Sales/mo | Avg Price | Revenue |
|---------|----------|----------|-----------|---------|
| Etsy Printables | 50+ | 150-400 | $4 | $600-$1,600 |
| Google Sheets | 15 | 50-120 | $9 | $450-$1,080 |
| KDP Books | 12 | 60-200 | $3.50 royalty | $210-$700 |
| Notion Templates | 15 | 30-75 | $10 | $300-$750 |
| **Total** | **92** | | | **$1,560-$4,130** |

### Month 6 (Mature phase)
| Product | Listings | Sales/mo | Avg Price | Revenue |
|---------|----------|----------|-----------|---------|
| Etsy Printables | 100+ | 400-1,000 | $5 | $2,000-$5,000 |
| Google Sheets | 20 | 100-250 | $10 | $1,000-$2,500 |
| KDP Books | 25 | 150-500 | $3.50 royalty | $525-$1,750 |
| Notion Templates | 20 | 50-150 | $12 | $600-$1,800 |
| **Total** | **165** | | | **$4,125-$11,050** |

---

## TOOLS SUMMARY (ALL FREE)

| Tool | What It Does | Install |
|------|-------------|---------|
| Claude Code | Generates ALL content (HTML, SVG, code, descriptions) | Already have |
| Python 3 | Script execution | Already have |
| Node.js | Puppeteer PDF rendering | Already have |
| Chrome | Headless PDF rendering | Already have |
| svgwrite | Python SVG generation | `pip3 install svgwrite` |
| fpdf2 | Python PDF creation | `pip3 install fpdf2` |
| cairosvg | SVG to PNG conversion | `pip3 install cairosvg` |
| Pillow | Image manipulation | `pip3 install Pillow` |
| Puppeteer | Programmatic Chrome control | `npm install -g puppeteer` |
| Canva (free) | Cover design, template creation | Browser |
| KDP | Book publishing | Free account |
| Etsy | Digital product marketplace | Free to list ($0.20/listing) |
| Gumroad | Digital product sales | Free (10% fee on sales) |
| Notion | Template creation | Free account |

### One-Command Setup
```bash
pip3 install svgwrite fpdf2 cairosvg Pillow && npm install -g puppeteer
```

---

## KEY INSIGHT: THE COMPOUND EFFECT

The real power here is not any single product -- it is the PIPELINE.

Once the HTML-to-PDF pipeline is built (a few hours of one-time work), every subsequent
printable takes 30-45 minutes. Once the Google Sheets Code.gs pattern is established,
every new template takes 1-1.5 hours. Once the SVG coloring book generator exists, every
new book takes 3-4 hours.

**At steady state:**
- Peter describes what he wants in plain English
- Claude Code generates everything (code, content, descriptions, SEO tags)
- Peter reviews, renders, and uploads
- Each product = 30 min to 1.5 hours of Peter's time
- AI does 90-95% of the creative and technical work

**The math:** If Peter spends 2 hours/day uploading products (while AI does the work), that is
2-4 new listings per day = 60-120 new listings per month = compounding passive income.

---

## Sources

- [Most Profitable Amazon KDP Niches](https://livingwriter.com/blog/most-profitable-amazon-kdp-niches-top-10/)
- [Amazon Coloring Book Trends June 2025](https://jmccolors.com/blogs/coloring-book-guides/amazon-coloring-book-trends-june-2025)
- [5 KDP Coloring Book Niches That Still Make Money in 2026](https://medium.com/write-a-catalyst/i-found-5-amazon-kdp-coloring-book-niches-that-still-make-money-in-2026-5393f7828c00)
- [Best Low Competition Coloring Book Niches for KDP](https://www.kdpeasy.com/blog/best-coloring-book-niches-kdp)
- [30 Top Selling Digital Products on Etsy in 2026](https://www.outfy.com/blog/top-selling-digital-products-on-etsy/)
- [14+ Best Selling Printables on Etsy: Trends 2026](https://www.printkk.com/blog/articles/best-selling-printables-on-etsy)
- [38 Popular Digital Products On Etsy (2026)](https://www.growingyourcraft.com/blog/most-popular-digital-products-on-etsy)
- [How to Make Money Selling Google Sheets Templates in 2026](https://ezycourse.com/blog/sell-sheet-template)
- [Best Google Sheets Templates to Sell Now](https://snazzydesignsforever.com/the-best-google-sheets-templates-to-sell-now/)
- [20 Untapped Etsy Niches for 2026](https://www.handmadebosses.com/blog/20-niche)
- [Best Selling Notion Template Designs 2025](https://plrbizhub.com/best-selling-notion-template-designs-that-generate-real-sales-revenue/)
- [How to Sell Notion Templates on Gumroad](https://www.thelostoffer.com/2025/01/how-to-sell-notion-template-on-gumroad.html)
- [KDP Set Trim Size, Bleed, and Margins](https://kdp.amazon.com/en_US/help/topic/GVBQ3CMEQW3W2VL6)
- [How to Format a Book for KDP (2025)](https://bookillustrationai.com/blog/how-to-format-a-book-for-kdp-complete-interior-design-guide-2025)
- [SVGMaker - AI SVG Generator](https://svgmaker.io/)
- [drawsvg Python Library](https://pypi.org/project/drawsvg/)
- [Canva Connect APIs](https://www.canva.dev/docs/connect/)
- [Etsy Printable Art File Types Discussion](https://community.etsy.com/t5/Love-Handmade/Printable-art-sellers-let-s-talk-about-file-types/td-p/126269080)
- [How to Size Digital Prints for Etsy](https://shootingstarsvg.com/blogs/digital-design-passive-income/how-to-size-printable-wall-art-to-sell-on-etsy)
