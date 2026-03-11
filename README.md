# 🔗 QR Code Generator

A simple **Node.js command-line tool** that takes any URL as input and generates a QR code image instantly.

## 📖 How It Works

1. Run the script in your terminal
2. Enter any URL when prompted
3. A **QR code image** (`qrCode.png`) is saved in the project folder
4. The entered URL is also saved to `url.txt` for reference

## 🗂️ Project Structure

```
├── index.js            # Main CLI logic
├── qrCode.png          # Generated QR code image (auto-created)
├── url.txt             # Saved URL (auto-created)
├── package.json        # Dependencies
└── package-lock.json   # Lockfile
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

```bash
# Clone the repo
git clone https://github.com/ashokml1729/qr_code.git

# Navigate into the project
cd qr-code

# Install dependencies
npm install
```

### Usage

```bash
node index.js
```

You will see a prompt in the terminal:

```
? Enter your url. ›
```

Type any URL and hit **Enter** — your QR code will be saved as `qrCode.png`.

## 🛠️ Built With

- **Node.js** — Runtime environment
- **Inquirer.js** — Interactive terminal prompts
- **qr-image** — QR code generation
- **fs** — File system to save output files

## 📄 License

This project is open source and free to use.
