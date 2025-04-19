import { Card, Button } from "flowbite-react";
import { HiDownload, HiBookOpen, HiAcademicCap } from "react-icons/hi";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ImpactPage() {
    const [donorData, setDonorData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [generatingCertificates, setGeneratingCertificates] = useState({});

    useEffect(() => {
        // Simulate API call with timeout
        const timer = setTimeout(() => {
            try {
                const mockData = {
                    name: "Sarah Johnson",
                    totalBooksDonated: 1243,
                    totalSchoolsHelped: 28,
                    donations: [
                        { id: 1, booksDonated: 250 },
                        { id: 2, booksDonated: 500 },
                        { id: 3, booksDonated: 493 }
                    ]
                };
                setDonorData(mockData);
            } catch (err) {
                setError("Failed to load donation data");
            } finally {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const generateCertificate = (donation) => {
        setGeneratingCertificates((prev) => ({ ...prev, [donation.id]: true }));
    
        const certificateDiv = document.createElement("div");
        certificateDiv.style.position = "absolute";
        certificateDiv.style.left = "-9999px";
        certificateDiv.style.width = "1056px";  
        certificateDiv.style.height = "816px";  
        certificateDiv.style.padding = "60px";
        certificateDiv.style.backgroundColor = "#fffaf2";
        certificateDiv.style.border = "2px solid #a96c4e";
        certificateDiv.style.borderRadius = "12px";
        certificateDiv.style.boxSizing = "border-box";
        
        certificateDiv.innerHTML = `
            <div style="position: relative; height: 100%; width: 100%; box-sizing: border-box;">
                <div style="display: flex; flex-direction: column; justify-content: center; 
                           align-items: center; height: 100%; width: 100%; padding: 40px; box-sizing: border-box;">
                    
                    <div style="margin-bottom: 40px; text-align: center;">
                        <div style="font-size: 14px; color: #a96c4e; font-weight: 600; 
                                   letter-spacing: 3px; margin-bottom: 8px; text-transform: uppercase;">
                            Certificate of Appreciation
                        </div>
                        <h2 style="font-size: 32px; font-weight: 700; color: #a96c4e; margin: 0;">
                            Book Donation Recognition
                        </h2>
                    </div>
    
                    <div style="text-align: center; margin-bottom: 40px;">
                        <p style="font-size: 16px; color: #666; font-style: italic; margin-bottom: 30px;">
                            This certificate is presented to
                        </p>
                        <h3 style="font-size: 28px; font-weight: 600; color: #333; 
                                   margin-bottom: 40px; padding-bottom: 20px; 
                                   border-bottom: 2px solid #a96c4e; display: inline-block;">
                            ${donorData?.name || "Generous Donor"}
                        </h3>
                    </div>
    
                    <div style="max-width: 600px; margin: 0 auto 40px; text-align: center;">
                        <p style="font-size: 18px; color: #666; margin-bottom: 20px;">
                            In recognition of your generous donation of
                        </p>
                        <div style="font-size: 48px; font-weight: 700; color: #a96c4e; 
                                   margin-bottom: 20px; line-height: 1.2;">
                            ${donation.booksDonated} Books
                        </div>
                        <p style="font-size: 16px; color: #666;">
                            Thank You for helping to open new worlds through the gift of reading
                        </p>
                    </div>
    
                    <div style="margin-top: auto; width: 100%;">
                        <div style="display: flex; justify-content: space-between; 
                                   align-items: center; margin-top: 40px; padding-top: 20px; 
                                   border-top: 1px solid #eee;">
                            <div style="text-align: left;">
                                <div style="font-size: 14px; color: #666;">Date</div>
                                <div style="font-weight: 600; color: #333;">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 14px; color: #666;">Presented by</div>
                                <div style="font-weight: 600; color: #333;">Books4All</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        document.body.appendChild(certificateDiv);
    
        html2canvas(certificateDiv, {
            scale: 2,
            logging: false,
            useCORS: true,
            backgroundColor: "#fffaf2",
            width: 1056,
            height: 818,
            windowWidth: 1056,
            windowHeight: 816
        }).then(canvas => {
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'in',
                format: [11, 8.5]
            });
            
            const imgWidth = 10;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            const xPos = (11 - imgWidth) / 2;
            const yPos = (9 - imgHeight) / 2;
            
            pdf.addImage(canvas, 'PNG', xPos, yPos, imgWidth, imgHeight);
            pdf.save(`book-donation-certificate-${donation.id}.pdf`);
            
            setGeneratingCertificates((prev) => ({ ...prev, [donation.id]: false }));
            document.body.removeChild(certificateDiv);
        }).catch((error) => {
            console.error("Certificate generation error:", error);
            setGeneratingCertificates((prev) => ({ ...prev, [donation.id]: false }));
            document.body.removeChild(certificateDiv);
        });
    };

    if (loading) {
        return (
            <div className="h-full bg-[#fffaf2] py-8 px-4 sm:px-6 w-full flex justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a96c4e] mx-auto mb-4"></div>
                    <p>Loading your donation impact...</p>
                </div>
            </div>
        );
    }

    if (error || !donorData) {
        return (
            <div className="h-full bg-[#fffaf2] py-8 px-4 sm:px-6 w-full flex justify-center items-center">
                <div className="text-center text-red-500">
                    <p>{error || "Failed to load donation data"}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full bg-[#fffaf2] py-8 px-4 sm:px-6 w-full">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Donation Impact</h1>
                    <p className="text-gray-600">View your donation history and download certificates</p>
                </div>

                {/* Donation Stats */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
                    <StatCard
                        icon={<HiBookOpen className="h-6 w-6" />}
                        value={donorData.totalBooksDonated}
                        label="Total Books Donated"
                        color="bg-[#f0e6d2]"
                        accent="text-[#a96c4e]"
                    />
                    <StatCard
                        icon={<HiAcademicCap className="h-6 w-6" />}
                        value={donorData.totalSchoolsHelped}
                        label="Total Schools Helped"
                        color="bg-[#e6f0d2]"
                        accent="text-[#5a8f3c]"
                    />
                </div>

                {/* Donation Certificates Grid */}
                <Card>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Your Certificates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {donorData.donations?.length > 0 ? (
                            donorData.donations.map((donation) => (
                                <Card key={donation.id} className="hover:shadow-md transition-shadow">
                                    <div className="flex flex-col h-full">
                                        <div className="flex-grow">
                                            <h3 className="font-medium text-lg mb-2">Certificate #{donation.id}</h3>
                                            <p className="text-[#a96c4e] font-bold text-xl mb-4">
                                                {donation.booksDonated} books donated
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-4">
                                            <Button
                                                fullSized
                                                color="light"
                                                onClick={() => generateCertificate(donation)}
                                                disabled={generatingCertificates[donation.id] || false}
                                            >
                                                <HiDownload className="mr-2 h-4 w-4" />
                                                {generatingCertificates[donation.id] ? "Generating..." : "Download"}
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-8">
                                <p className="text-gray-500">No donation certificates available</p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}

function StatCard({ icon, value, label, color, accent }) {
    return (
        <Card className={`${color} border-0 shadow-none`}>
            <div className="flex items-center p-4">
                <div className={`p-2 rounded-full ${accent} bg-white mr-3`}>
                    {icon}
                </div>
                <div>
                    <p className="text-xl font-bold text-gray-800">{value}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                </div>
            </div>
        </Card>
    );
}