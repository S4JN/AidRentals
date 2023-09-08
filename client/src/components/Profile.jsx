import React from 'react';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Divider,
} from '@mui/material';

const styles = {
    root: {
        maxWidth: "1024px",
        margin: 'auto',
        marginTop: 20,
        border: 0,
        

    },
    avatar: {
        backgroundColor: '#3f51b5',
    },
    label: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    content: {
        marginTop: 16,
    },
};

const Profile = (props) => {
    const {
        name,
        address,
        phone,
        email,
        role,
        city,
        zip,
    } = props;

    return (
        <Card style={styles.root}>
            <CardHeader

                titleTypographyProps={{ variant: 'h4' }}
                title={name}
            />
            <CardContent>
                <div style={styles.content}>
                    <Typography variant="subtitle1" component="span" style={styles.label}>
                        Address:
                    </Typography>
                    <Typography variant="body1" component="span">
                        {address}, {city}, {zip}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div style={styles.content}>
                    <Typography variant="subtitle1" component="span" style={styles.label}>
                        Phone:
                    </Typography>
                    <Typography variant="body1" component="span">
                        {phone}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div style={styles.content}>
                    <Typography variant="subtitle1" component="span" style={styles.label}>
                        Email:
                    </Typography>
                    <Typography variant="body1" component="span">
                        {email}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div style={styles.content}>
                    <Typography variant="subtitle1" component="span" style={styles.label}>
                        Role:
                    </Typography>
                    <Typography variant="body1" component="span">
                        {role}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div style={styles.content}>
                    <Typography variant="subtitle1" component="span" style={styles.label}>
                        City:
                    </Typography>
                    <Typography variant="body1" component="span">
                        {city}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div style={styles.content}>

                </div>
            </CardContent>
        </Card>
    );
};

export default Profile;
