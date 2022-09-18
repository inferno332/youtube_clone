import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    if (snippet)
        return (
            <Card
                sx={{
                    width: { sx: '100%', sm: '358px', md: '320px' },
                    boxShadow: 'none',
                    borderRadius: 0,
                }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <CardMedia
                        alt={snippet?.title}
                        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                        sx={{
                            width: {
                                sx: '100%',
                                sm: '358px',
                                md: '320px',
                            },
                            height: 180,
                        }}
                    />
                </Link>
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link
                        to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
                    >
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        );
};

export default VideoCard;
