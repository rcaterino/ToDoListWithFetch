import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

//create your first component
const Home = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginForm/>} />
        <Route path="/signup" element={<SignUp/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Home;
