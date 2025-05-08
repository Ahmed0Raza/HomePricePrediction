import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import os
import sys
import json

# Load the dataset
csv_path = os.path.join(os.path.dirname(__file__), "HouseData.csv")
df = pd.read_csv(csv_path)

# Define features and target
X = df[['area', 'bedrooms', 'bathrooms', 'stories', 'basement', 'airconditioning']]
y = df['price']

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Get input from stdin
input_data = sys.stdin.read()
user_input = json.loads(input_data)

# Predict
user_df = pd.DataFrame([user_input])
predicted_price = model.predict(user_df)[0]
print(f'{predicted_price:.2f}')
