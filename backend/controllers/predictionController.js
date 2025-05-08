import { spawn } from 'child_process';
import path from 'path';

export const predictHousePrice = (req, res) => {
  const scriptPath = path.resolve('ml/model.py');

  const pythonProcess = spawn('python3', [scriptPath]);

  let result = '';

  // Listen for output from Python
  pythonProcess.stdout.on('data', (data) => {
    result += data.toString();
  });

  // Listen for errors
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
  });

  // Send JSON input to Python via stdin
  pythonProcess.stdin.write(JSON.stringify(req.body));
  pythonProcess.stdin.end();

  // Handle completion
  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Python script failed to execute' });
    }

    console.log(`Prediction result: ${result.trim()}`);
    res.json({ predictedPrice: result.trim() });
  });
};
