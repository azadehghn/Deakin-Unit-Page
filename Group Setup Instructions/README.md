# Setup Instructions


## Table of Contents
- [Github Account](#github-account)
- [Install Git](#install-git)
- [Github Desktop](#github-desktop)
- [Visual Studio Code](#visual-studio-code)

--- 
### GitHub Account
- Go to [GitHub](https://www.github.com/)
- Sign up or log in

--- 

### Install Git

⚠️ **BEFORE YOU PROCEED:** Please note that, since the group is using both **Windows** and **Apple Silicon Macs**, some instructions may not apply to Intel-based Macs. If you are using an Intel-based Mac, please verify the appropriate / recommended steps for Intel-based Macs online..
 
 
**🖥️ Windows**
1. Go to the official Git website:  
   [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. The download will start automatically.
3. Run the downloaded `.exe` file.
4. Follow the installation wizard:  
   - Click "Next" on most steps  
   - Choose your preferred editor (e.g., VS Code)  
   - Use default options unless you know what you’re doing
5. Open **Command Prompt** and type:
   ```bash
   git --version

You should see output like git version 2.x.x.


**🖥️ MACOS (Apple Silicon – M1/M2/M3)** 

⚠️ IMPORTANT: If you are using an Intel-based Macs, please verify the appropriate / recommended steps for Intel-based Macs online.

**Recommended steps for MACOS Apple Silicon – M1/M2/M3**
1. Install Homebrew (if not installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, configure your shell:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

2. Install Git

```bash
brew install git
```

3. Confirm Installation

```bash
git --version
```

You should see output like `git version 2.x.x`.

**⚠️ Notes**

- Use **/opt/homebrew/** (not `/usr/local`) for Apple Silicon compatibility.
- Avoid running terminal in **Rosetta** unless absolutely necessary.
- Homebrew ensures you're using the ARM-native versions of packages.

--- 
###  Configure Git
Replace with your details:
```bash
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL"
```
--- 
### GitHub Desktop
1. Go to: [https://desktop.github.com/](https://desktop.github.com/)
2. Download GitHub Desktop
   - The site detects your OS automatically.
   - Click “Download for macOS” or “Download for Windows”.
3. Install the application**
   - **Windows**: Run the `.exe` file.
   - **macOS**: Open the `.dmg` file and drag it to the Applications folder.
4. Launch GitHub Desktop
   - Sign in with your GitHub account to get started.
--- 
### Visual Studio Code

1. Go to: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download VS Code
   - Choose your OS version (Windows, macOS Intel or Apple Silicon, or Linux).
   - Click the “Download” button.
3. Install VS Code
   - **Windows**: Run the `.exe` file.
   - **macOS**: Open the `.dmg` or `.zip` file and move it to Applications.
4. Launch VS Code

  ** Recommended Extensions:**
   - ESLint: For identifying and reporting on patterns in JavaScript.
   - Prettier: For code formatting.
   - GitHub Copilot: For AI-assisted code suggestions (if available).
   - Live Server: for real-time preview of HTML
---
