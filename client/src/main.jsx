import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from "../context/AuthContext";
import { WorkoutsContextProvider } from '../context/WorkoutContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<BrowserRouter>
				<WorkoutsContextProvider>
					<App />
				</WorkoutsContextProvider>
			</BrowserRouter>
		</AuthContextProvider>
	</React.StrictMode>
);
