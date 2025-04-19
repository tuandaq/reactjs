import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';

ContactQRCode.propTypes = {
    contact: PropTypes.object.isRequired,
};

function ContactQRCode({ contact }) {
    if (!contact) return null;
    const downloadQRCode = () => {
        const canvas = document.querySelector("canvas");
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = `${contact.name}-qrcode.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Card className="p-4 flex flex-col items-center">
            {/* <img
                src={contact.avatar}
                alt={contact.name}
                className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <p className="text-sm text-gray-500">{contact.address}</p> */}
            <Box>
                <QRCodeCanvas value={JSON.stringify(contact)} size={128} className="mt-4" />
            </Box>
            <Button className="mt-2" onClick={downloadQRCode}>
                Tải QR Code
            </Button>
        </Card>
    );
}

export default ContactQRCode;