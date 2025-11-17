'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
	return (
		<ToastContainer
			position='bottom-right'
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			pauseOnHover
			draggable
			theme='dark'
		/>
	);
};
export default Toaster;
