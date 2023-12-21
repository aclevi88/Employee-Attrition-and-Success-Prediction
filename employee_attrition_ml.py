import pandas as pd
import numpy as np
import matplotlib

import matplotlib.pyplot as plt
import seaborn as sns
import pickle

emp_att_df = pd.read_csv("Synthetic-IBM-HR-Employee-Attrition.csv")
emp_att_df.head()

emp_att_df = emp_att_df.drop(['Over18','EmployeeCount','StandardHours','EmployeeNumber'],axis=1)

features = emp_att_df.drop('Attrition', axis=1)
features['BusinessTravel'] = features['BusinessTravel'].map({'Non-Travel':0,'Travel_Rarely': 1, 'Travel_Frequently':2})
features['Department'] = features['Department'].map({'Sales':0,'Research & Development': 1, 'Human Resources':2})
features['EducationField'] = features['EducationField'].map({'Life Sciences':0,'Other': 1, 'Medical':2, 'Marketing':3,'Technical Degree': 4, 'Human Resources':5})
features['Gender'] = features['Gender'].map({'Female':0,'Male': 1})
features['JobRole'] = features['JobRole'].map({'Laboratory Technician':0,'Research Scientist': 1, 'Manufacturing Director':2, 'Healthcare Representative':3, 'Manager': 4, 'Sales Representative':5, 'Research Director':6, 'Human Resources':7, 'Sales Executive': 8})
features['MaritalStatus'] = features['MaritalStatus'].map({'Single':0,'Married': 1, 'Divorced': 2})
features['OverTime'] = features['OverTime'].map({'No':0,'Yes': 1})

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier


X = features
y = emp_att_df['Attrition'].map({'No':0, 'Yes':1})

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.30)

clf = RandomForestClassifier(n_estimators = 100)


clf.fit(X_train, y_train)

pickle.dump(clf, open("model.pkl", "wb"))
