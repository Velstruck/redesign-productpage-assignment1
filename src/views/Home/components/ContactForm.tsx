import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            setIsSubmitting(false);
            toast.push(
                <Notification title="Success" type="success">
                    Successfully submitted
                </Notification>
            );
            setFormState({ fullname: '', email: '', subject: '', message: '' });
        } catch (err) {
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={err?.response?.data.message}
                    type="danger"
                >
                    {err?.response?.data.message}
                </Notification>
            );
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Let’s get in touch!</h2>
                            <p className="text-gray-300 text-lg">
                                Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-800 p-3 rounded-lg">
                                    <BiPhone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400">Phone</p>
                                    <a href="tel:+919811396858" className="text-white hover:text-purple-300 transition-colors">
                                        +91 9811396858
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-800 p-3 rounded-lg">
                                    <CgMail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <a href="mailto:hello@gogetwell.ai" className="text-white hover:text-purple-300 transition-colors">
                                        hello@gogetwell.ai
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <Link
                                    to="https://x.com/gogetwellai"
                                    target="_blank"
                                    className="bg-purple-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                                >
                                    <BsTwitter className="w-6 h-6 text-white" />
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/company/gogetwellai/"
                                    target="_blank"
                                    className="bg-purple-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                                >
                                    <BsLinkedin className="w-6 h-6 text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-gray-800 rounded-xl p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div className="relative">
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'fullName' || formState.fullname ? 'text-purple-300' : 'text-gray-500'}`}>
                                    <BiUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullname')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'email' || formState.email ? 'text-purple-300' : 'text-gray-500'}`}>
                                    <CgMail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows={4}
                                    className="w-full p-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                loading={isSubmitting}
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-500 transition-colors flex items-center justify-center space-x-2"
                            >
                                <span>Submit</span>
                                <BiSend className="w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
