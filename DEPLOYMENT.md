# Deployment — DANACH Solutions website

The site deploys to **Hostinger** shared hosting as static files, built automatically
from **GitHub** on every push to `main`.

## How it works

1. You push to `main` (or run the workflow manually).
2. GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
   checks out the code, runs `npm ci` then `npm run build`, which produces a static
   `./out` folder.
3. The action uploads the contents of `./out/` to your Hostinger `public_html/` over
   FTP using credentials stored as **repository secrets** (never in the code).

Subsequent deploys only upload changed files (the FTP action keeps a state file on the
server), so they are fast.

---

## One-time setup (do this yourself)

### 1. Create the GitHub repo and push the code

```bash
cd danach-solutions-web
git add -A
git commit -m "Initial commit: DANACH Solutions site (Next.js)"
# Create a repo on github.com (e.g. "danach-solutions-web"), then:
git branch -M main
git remote add origin https://github.com/<your-username>/danach-solutions-web.git
git push -u origin main
```

> The first push will trigger the workflow, but it will **fail at the deploy step**
> until you add the FTP secrets below. That's expected — add the secrets, then re-run.

### 2. Get your FTP details from Hostinger

In **hPanel** → **Files** → **FTP Accounts** (or **FTP Accounts** under your hosting
plan):

- **FTP hostname / IP** — e.g. `ftp.danachsolutions.com` or a numeric IP. This is your
  `FTP_SERVER`.
- **FTP username** — e.g. `u123456789.danachsolutions`. This is your `FTP_USERNAME`.
- **FTP password** — click **Change FTP password** to set or confirm a password you
  know. This is your `FTP_PASSWORD`.

> Note the **target directory**. On most Hostinger plans the web root is `public_html/`
> (what the workflow uses). If your domain is an add-on/subdomain, it may live in a
> different folder (e.g. `domains/danachsolutions.com/public_html/`). If so, update
> `server-dir` in [`deploy.yml`](.github/workflows/deploy.yml) to match.

### 3. Add the secrets to GitHub

In your repo: **Settings → Secrets and variables → Actions → New repository secret**.
Add three secrets (names must match exactly):

| Secret name    | Value                          |
| -------------- | ------------------------------ |
| `FTP_SERVER`   | FTP hostname or IP from step 2 |
| `FTP_USERNAME` | FTP username from step 2       |
| `FTP_PASSWORD` | FTP password from step 2       |

### 4. Back up and clear `public_html` before the first deploy

In hPanel → **File Manager** (or via FTP):

1. **Back up** the current contents of `public_html/` — download them, or zip the
   folder and keep the archive somewhere safe so you can roll back.
2. **Delete** the old site files in `public_html/` (keep any non-site files you rely on,
   e.g. `.well-known/`, custom `.htaccess`, mail config). The deploy only manages files
   it uploads, so old leftover pages won't be removed automatically — clearing first
   avoids stale files lingering alongside the new site.

### 5. Run the deploy and verify

- Push to `main`, or go to **Actions → Build and Deploy to Hostinger → Run workflow**
  (the `workflow_dispatch` trigger).
- Watch the run go green.
- Visit your domain. Check:
  - All pages load: `/`, `/services/`, `/about/`, `/contact/`, `/blog/`, `/privacy/`.
  - The logo swaps between light/dark with your OS theme.
  - The Calendly embed appears on the Contact page.
  - Images and the favicon load.

### Rolling back

- **Quick:** re-upload your step-4 backup into `public_html/` via File Manager.
- **Clean:** `git revert` the bad commit (or `git reset` to a known-good commit and
  force-push), then push to `main` — the workflow rebuilds and redeploys the previous
  version. Or use **Actions → Re-run jobs** on the last good run.

---

## Alternative: Hostinger native Git deployment

Hostinger offers a built-in **Git** feature (hPanel → **Advanced → GIT**) that can pull
your repo and run a build on the server, triggered by a webhook on push:

- **Repository:** your GitHub repo URL
- **Branch:** `main`
- **Build command:** `npm install && npm run build`
- **Output / publish directory:** `out`
- Enable the **auto-deployment webhook** so pushes trigger a rebuild.

**When to prefer it:** if you'd rather not store FTP credentials in GitHub secrets, or
you want Hostinger to own the whole build+publish step in one place.

**When to prefer the GitHub Actions approach (this repo's default):** it's the more
reliable and portable option — builds run on GitHub's clean Node 20 runners (not
shared hosting, where Node versions and build resources can be limited or unavailable),
you get full build logs in the Actions tab, and the same workflow moves to any host by
changing the deploy step. Recommended unless you have a specific reason to build on
Hostinger.
