import React from 'react';
import { ExternalLink, Scale, FileText } from 'lucide-react';

const Legal = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-24 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
                            Legal & Licenses
                        </h1>
                        <p className="text-lg text-gray-600">
                            Open source licenses and attributions
                        </p>
                    </div>

                    {/* Motion Icons License */}
                    <div className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="w-6 h-6 text-black" />
                            <h2 className="text-2xl font-bold text-black">Motion Icons License</h2>
                        </div>
                        <div className="mb-4">
              <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                MIT License
              </span>
                        </div>
                        <div className="prose prose-sm max-w-none">
                            <p className="text-gray-700 mb-4">
                                Copyright (c) 2025 Motion Icons Contributors
                            </p>
                            <p className="text-gray-700 mb-4">
                                Permission is hereby granted, free of charge, to any person obtaining a copy
                                of this software and associated documentation files (the "Software"), to deal
                                in the Software without restriction, including without limitation the rights
                                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                copies of the Software, and to permit persons to whom the Software is
                                furnished to do so, subject to the following conditions:
                            </p>
                            <p className="text-gray-700 mb-4">
                                The above copyright notice and this permission notice shall be included in all
                                copies or substantial portions of the Software.
                            </p>
                            <p className="text-gray-700 text-xs bg-gray-100 p-4 rounded-lg">
                                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                SOFTWARE.
                            </p>
                        </div>
                    </div>

                    {/* Lucide Icons License */}
                    <div className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-black" />
                            <h2 className="text-2xl font-bold text-black">Lucide Icons License</h2>
                        </div>
                        <div className="mb-4 flex items-center gap-2">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                ISC License
              </span>
                            <a
                                href="https://lucide.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                            >
                                Visit Lucide
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        <div className="prose prose-sm max-w-none">
                            <p className="text-gray-700 mb-4">
                                Motion Icons uses icons from <strong>Lucide</strong>, an open-source icon library.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part
                                of Feather (MIT). All other copyright (c) for Lucide are held by Lucide
                                Contributors 2025.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Permission to use, copy, modify, and/or distribute this software for any
                                purpose with or without fee is hereby granted, provided that the above
                                copyright notice and this permission notice appear in all copies.
                            </p>
                            <p className="text-gray-700 text-xs bg-gray-100 p-4 rounded-lg">
                                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                                PERFORMANCE OF THIS SOFTWARE.
                            </p>
                        </div>
                    </div>

                    {/* Feather Icons License */}
                    <div className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-black" />
                            <h2 className="text-2xl font-bold text-black">Feather Icons License</h2>
                        </div>
                        <div className="mb-4">
              <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                MIT License
              </span>
                        </div>
                        <div className="prose prose-sm max-w-none">
                            <p className="text-gray-700 mb-4">
                                Portions of Lucide are derived from <strong>Feather Icons</strong>.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Copyright (c) 2013-2023 Cole Bemis
                            </p>
                            <p className="text-gray-700 mb-4">
                                Permission is hereby granted, free of charge, to any person obtaining a copy
                                of this software and associated documentation files (the "Software"), to deal
                                in the Software without restriction, including without limitation the rights
                                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                copies of the Software, and to permit persons to whom the Software is
                                furnished to do so, subject to the following conditions:
                            </p>
                            <p className="text-gray-700 mb-4">
                                The above copyright notice and this permission notice shall be included in all
                                copies or substantial portions of the Software.
                            </p>
                            <p className="text-gray-700 text-xs bg-gray-100 p-4 rounded-lg">
                                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                SOFTWARE.
                            </p>
                        </div>
                    </div>

                    {/* Attribution Section */}
                    <div className="bg-black text-white rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
                        <div className="space-y-4 text-sm text-gray-300">
                            <p>
                                <strong className="text-white">Motion Icons</strong> is built on top of the excellent work by:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <a
                                        href="https://lucide.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        Lucide Icons
                                    </a> - Open source icon library (ISC License)
                                </li>
                                <li>
                                    <a
                                        href="https://feathericons.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        Feather Icons
                                    </a> - Simply beautiful open source icons (MIT License)
                                </li>
                                <li>
                                    <a
                                        href="https://react.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        React
                                    </a> - JavaScript library for building user interfaces
                                </li>
                            </ul>
                            <p className="pt-4 border-t border-gray-700">
                                We are grateful to these projects and their contributors for making Motion Icons possible.
                            </p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 text-sm">
                            Questions about licensing?{' '}
                            <a
                                href="https://github.com/Garvit1000/motion-icons/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black font-semibold hover:underline"
                            >
                                Contact us on GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legal;