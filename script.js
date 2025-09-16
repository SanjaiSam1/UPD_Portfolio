document.addEventListener("DOMContentLoaded", function () {
    // Responsive Dropdown Navigation
    const navbar = document.querySelector(".dropdown");
    const hamburgerBtn = document.querySelector(".hamburg");
    const cancelBtn = document.querySelector(".cancel");
    const dropdownLinks = document.querySelectorAll(".dropdown .links a");
    const mobileBreakpoint = 884;

    function toggleDropdown(show) {
        navbar.style.transform = show ? "translateY(0)" : "translateY(-500px)";
    }

    function handleResize() {
        if (window.innerWidth > mobileBreakpoint) {
            toggleDropdown(false);
        }
    }

    if (hamburgerBtn && cancelBtn && navbar) {
        hamburgerBtn.addEventListener("click", () => toggleDropdown(true));
        cancelBtn.addEventListener("click", () => toggleDropdown(false));
        
        dropdownLinks.forEach(link => {
            link.addEventListener("click", () => toggleDropdown(false));
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") toggleDropdown(false);
        });

        window.addEventListener("resize", handleResize);
    }

    // Typewriter Effect
    const texts = ["DEVELOPER", "DESIGNER", "FREELANCER"];
    let textIndex = 0;
    let charIndex = 0;
    const textElement = document.querySelector(".typewriter-text");
    const typingSpeed = 100, erasingSpeed = 50, delayBetweenWords = 1000;

    function typeWriter() {
        if (!textElement) return;

        if (charIndex < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(eraseText, delayBetweenWords);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        }
    }

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") typeWriter();
    });

    typeWriter();

    // External Links
    function handleExternalLink(e, url) {
        e.preventDefault();
        window.open(url, "_blank");
    }

    // LinkedIn Profile Link
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
    linkedinLinks.forEach(link => {
        link.href = "https://www.linkedin.com/in/sanjai-sam-7389a9333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        link.addEventListener("click", (e) => handleExternalLink(e, link.href));
    });

    // KGCAS Link
    const kgcasLink = document.querySelector(".kgcas-link");
    if (kgcasLink) {
        kgcasLink.classList.add("fade-in");
        kgcasLink.addEventListener("click", (e) => handleExternalLink(e, "https://www.kgcas.com"));
    }

    // Touch Device Support
    if ('ontouchstart' in window) {
        document.body.classList.add("touch-device");
        dropdownLinks.forEach(link => {
            link.addEventListener("touchend", (e) => {
                e.preventDefault();
                link.click();
            });
        });
    }

    // Tic-Tac-Toe Python Project
    function runPythonCode() {
        const pythonCode = `# Tic-Tac-Toe Game
def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board):
    # Check rows, columns, and diagonals
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != " ":
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != " ":
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]
    return None

def tictactoe():
    board = [[" "]*3 for _ in range(3)]
    current_player = "X"
    
    print("Welcome to Tic-Tac-Toe!")
    while True:
        print_board(board)
        try:
            row, col = map(int, input(f"Player {current_player}'s move (row col): ").split())
            if board[row][col] == " ":
                board[row][col] = current_player
                if check_winner(board):
                    print_board(board)
                    print(f"Player {current_player} wins!")
                    break
                current_player = "O" if current_player == "X" else "X"
            else:
                print("Position already taken!")
        except:
            print("Invalid input! Use: row(0-2) col(0-2)")

if __name__ == "__main__":
    tictactoe()`;

        showCodeModal("Tic-Tac-Toe Python Game", pythonCode, "python", [
            "Save as tictactoe.py",
            "Run: python tictactoe.py"
        ], [
            "2-player terminal game",
            "Win condition checking",
            "Input validation"
        ]);
    }

    // Temperature Converter Java Project
    function showJavaCode() {
        const javaCode = `/* TemperatureConverterGUI.java */
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class TemperatureConverterGUI extends JFrame implements ActionListener {
    private JLabel inputLabel, resultLabel;
    private JTextField inputField, resultField;
    private JButton celsiusToFahrenheit, fahrenheitToCelsius;
    
    public TemperatureConverterGUI() {
        setTitle("Temperature Converter");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(3, 2, 10, 10));
        
        inputLabel = new JLabel("Enter Temperature:", SwingConstants.CENTER);
        inputField = new JTextField();
        
        resultLabel = new JLabel("Result:", SwingConstants.CENTER);
        resultField = new JTextField();
        resultField.setEditable(false);
        
        celsiusToFahrenheit = new JButton("Celsius to Fahrenheit");
        fahrenheitToCelsius = new JButton("Fahrenheit to Celsius");
        
        celsiusToFahrenheit.addActionListener(this);
        fahrenheitToCelsius.addActionListener(this);
        
        add(inputLabel);
        add(inputField);
        add(resultLabel);
        add(resultField);
        add(celsiusToFahrenheit);
        add(fahrenheitToCelsius);
        
        setVisible(true);
    }
    
    public void actionPerformed(ActionEvent e) {
        try {
            double temp = Double.parseDouble(inputField.getText());
            double convertedTemp;
            
            if (e.getSource() == celsiusToFahrenheit) {
                convertedTemp = (temp * 9/5) + 32;
                resultField.setText(String.format("%.2f °F", convertedTemp));
            } else {
                convertedTemp = (temp - 32) * 5/9;
                resultField.setText(String.format("%.2f °C", convertedTemp));
            }
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Please enter a valid number!", 
                                        "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TemperatureConverterGUI());
    }
}`;

        showCodeModal("Temperature Converter (Java GUI)", javaCode, "java", [
            "Save as TemperatureConverterGUI.java",
            "Compile: javac TemperatureConverterGUI.java",
            "Run: java TemperatureConverterGUI"
        ], [
            "Clean graphical interface",
            "Real-time conversion",
            "Input validation",
            "Precise decimal formatting"
        ]);
    }

    // Generic Code Modal Display Function
    function showCodeModal(title, code, language, instructions, features) {
        const modal = document.createElement('div');
        modal.className = 'code-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3><i class="fas ${language === 'python' ? 'fa-python' : 'fa-coffee'}"></i> ${title}</h3>
                <div class="code-container">
                    <pre>${code}</pre>
                </div>
                <div class="instructions">
                    <h4><i class="fas fa-info-circle"></i> How to Run:</h4>
                    <ol>
                        ${instructions.map(i => `<li>${i}</li>`).join('')}
                    </ol>
                    <button class="copy-code"><i class="far fa-copy"></i> Copy Code</button>
                    <div class="features">
                        <h4><i class="fas fa-star"></i> Features:</h4>
                        <ul>
                            ${features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.querySelector('.copy-code').addEventListener('click', () => {
            navigator.clipboard.writeText(code)
                .then(() => {
                    const btn = modal.querySelector('.copy-code');
                    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="far fa-copy"></i> Copy Code';
                    }, 2000);
                });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    // Make functions globally available
    window.runPythonCode = runPythonCode;
    window.showJavaCode = showJavaCode;

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hire Me button
    const hireMeBtn = document.getElementById('hire-me');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', () => {
            window.location.href = '#contact';
        });
    }
});