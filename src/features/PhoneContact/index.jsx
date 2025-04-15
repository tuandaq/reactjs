import React from 'react';
import { useState, useEffect } from "react"
import {
    Box,
    Container,
    Typography,
    TextField,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Paper,
    InputAdornment,
    IconButton,
    Chip,
    Grid,
    Card,
    CardContent,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { Search, Phone, Email, Star, StarBorder, PersonAdd } from "@mui/icons-material"
import ContactQRCode from './component/ContactQRCode';
import AddPersonAdd from './component/AddPersonAdd';



function PhoneContact(props) {
    const initialContacts = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            phone: "(091) 234 5678",
            email: "nguyenvana@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: true,
        },
        {
            id: 2,
            name: "Trần Thị B",
            phone: "(092) 345 6789",
            email: "tranthib@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        },
        {
            id: 3,
            name: "Lê Văn C",
            phone: "(093) 456 7890",
            email: "levanc@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: true,
        },
        {
            id: 4,
            name: "Phạm Thị D",
            phone: "(094) 567 8901",
            email: "phamthid@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        },
        {
            id: 5,
            name: "Hoàng Văn E",
            phone: "(095) 678 9012",
            email: "hoangvane@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        },
        {
            id: 6,
            name: "Võ Thị F",
            phone: "(096) 789 0123",
            email: "vothif@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: true,
        },
        {
            id: 7,
            name: "Đặng Văn G",
            phone: "(097) 890 1234",
            email: "dangvang@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        },
        {
            id: 8,
            name: "Bùi Thị H",
            phone: "(098) 901 2345",
            email: "buithih@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        },
        {
            id: 9,
            name: "Ngô Văn I",
            phone: "(099) 012 3456",
            email: "ngovani@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: true,
        },
        {
            id: 10,
            name: "Dương Thị K",
            phone: "(090) 123 4567",
            email: "duongthik@gmail.com.com",
            avatar: "/placeholder.svg?height=40&width=40",
            favorite: false,
        },
    ];
    const [ isDiaLog, setisDiaLog ] = useState(false);
    const [ contacts, setContacts ] = useState(initialContacts)
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ selectedContact, setSelectedContact ] = useState(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    // Filter contacts based on search term
    useEffect(() => {
        if (searchTerm === "") {
            setContacts(initialContacts)
        } else {
            const filtered = initialContacts.filter(
                (contact) =>
                    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    contact.phone.includes(searchTerm) ||
                    contact.email.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            setContacts(filtered)
        }
    }, [ searchTerm ])

    // Toggle favorite status
    const toggleFavorite = (id) => {
        setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, favorite: !contact.favorite } : contact)))
    }

    // Sort contacts: favorites first, then alphabetically
    const sortedContacts = [ ...contacts ].sort((a, b) => {
        if (a.favorite && !b.favorite) return -1
        if (!a.favorite && b.favorite) return 1
        return a.name.localeCompare(b.name)
    })

    const handleClick = () => {
        setisDiaLog(!isDiaLog);
    }

    const addPersonal = (data) => {
        setContacts((prev) => {
            return [ ...prev, data ]
        })
    }

    console.log(isDiaLog);
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
                {/* Header */}
                <Box
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5" component="h1" fontWeight="bold">
                        Danh bạ
                    </Typography>
                    <IconButton onClick={handleClick} color="inherit" aria-label="add contact">
                        <PersonAdd />
                    </IconButton>
                </Box>

                <Grid container>
                    {/* Contact List */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            borderRight: isMobile ? "none" : `1px solid ${theme.palette.divider}`,
                            height: isMobile ? "auto" : "70vh",
                            overflow: "auto",
                        }}
                    >
                        {/* Search Bar */}
                        <Box sx={{ p: 2, position: "sticky", top: 0, bgcolor: "background.paper", zIndex: 1 }}>
                            <TextField
                                fullWidth
                                placeholder=" Tìm kiếm liên hệ "
                                variant="outlined"
                                size="small"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search color="action" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* Contacts List */}
                        <List sx={{ p: 0 }}>
                            {sortedContacts.length > 0 ? (
                                sortedContacts.map((contact, index) => (
                                    <React.Fragment key={contact.id}>
                                        <ListItem
                                            button
                                            alignItems="flex-start"
                                            selected={selectedContact?.id === contact.id}
                                            onClick={() => setSelectedContact(contact)}
                                            sx={{
                                                px: 2,
                                                py: 1.5,
                                                "&.Mui-selected": {
                                                    bgcolor: "action.selected",
                                                },
                                            }}
                                        >
                                            <ListItemAvatar>
                                                <Avatar src={contact.avatar} alt={contact.name}>
                                                    {contact.name.charAt(0)}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                        <Typography variant="subtitle1" component="span" fontWeight={500}>
                                                            {contact.name}
                                                        </Typography>
                                                        <IconButton
                                                            size="small"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                toggleFavorite(contact.id)
                                                            }}
                                                        >
                                                            {contact.favorite ? <Star color="warning" /> : <StarBorder color="action" />}
                                                        </IconButton>
                                                    </Box>
                                                }
                                                secondary={
                                                    <Typography variant="body2" color="text.secondary" noWrap>
                                                        {contact.phone}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        {index < sortedContacts.length - 1 && <Divider component="li" />}
                                    </React.Fragment>
                                ))
                            ) : (
                                <Box sx={{ p: 3, textAlign: "center" }}>
                                    <Typography color="text.secondary">No contacts found</Typography>
                                </Box>
                            )}
                        </List>
                    </Grid>

                    {/* Contact Details */}
                    <Grid item xs={12} md={8} sx={{ height: isMobile ? "auto" : "70vh", overflow: "auto" }}>
                        {selectedContact ? (
                            <Box sx={{ p: 3 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: isMobile ? "column" : "row",
                                        alignItems: isMobile ? "center" : "flex-start",
                                        gap: 3,
                                        mb: 4,
                                    }}
                                >
                                    <Avatar
                                        src={selectedContact.avatar}
                                        alt={selectedContact.name}
                                        sx={{ width: 100, height: 100, fontSize: 40 }}
                                    >
                                        {selectedContact.name.charAt(0)}
                                    </Avatar>
                                    <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                            <Typography variant="h4" component="h2" fontWeight="bold">
                                                {selectedContact.name}
                                            </Typography>
                                            {selectedContact.favorite && <Star color="warning" />}
                                        </Box>
                                        <Chip label="Personal" size="small" color="primary" variant="outlined" />
                                    </Box>
                                </Box>

                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                    Phone
                                                </Typography>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                    <Phone color="primary" fontSize="small" />
                                                    <Typography variant="body1">{selectedContact.phone}</Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                    Email
                                                </Typography>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                    <Email color="primary" fontSize="small" />
                                                    <Typography variant="body1">{selectedContact.email}</Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Box>
                                    <ContactQRCode contact={selectedContact}></ContactQRCode>
                                </Box>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    p: 3,
                                }}
                            >
                                <Typography variant="h6" color="text.secondary" align="center">
                                    Chọn 1 liên hệ để xem chi tiết
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Paper>
            <AddPersonAdd isDiaLog={isDiaLog} setIsDiaLog={setisDiaLog} onSubmit={addPersonal} />
        </Container>
    )
}

export default PhoneContact;