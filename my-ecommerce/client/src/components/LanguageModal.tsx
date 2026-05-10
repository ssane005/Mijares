import { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'mijares-language';

const LanguageModal = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(!localStorage.getItem(STORAGE_KEY));

  const select = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    setOpen(false);
  };

  return (
    <Modal open={open} disableAutoFocus>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#F8F4EE',
          width: { xs: '85vw', sm: 420 },
          px: { xs: 4, sm: 6 },
          py: 6,
          outline: 'none',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.8rem',
            fontWeight: 300,
            letterSpacing: '0.03em',
            color: '#1A140C',
            mb: 1.5,
          }}
        >
          {t('language.modalTitle')}
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: '0.8rem', color: '#9E9189', mb: 5, letterSpacing: '0.03em' }}
        >
          {t('language.modalSubtitle')}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
          <Button
            onClick={() => select('en')}
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.3rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#1A140C',
              p: 0,
              minWidth: 'auto',
              '&:hover': { color: '#8C4A2F', backgroundColor: 'transparent' },
            }}
          >
            {t('language.english')}
          </Button>
          <Typography sx={{ color: '#D4CCC6', fontSize: '1rem' }}>·</Typography>
          <Button
            onClick={() => select('es')}
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.3rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#1A140C',
              p: 0,
              minWidth: 'auto',
              '&:hover': { color: '#8C4A2F', backgroundColor: 'transparent' },
            }}
          >
            {t('language.spanish')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LanguageModal;
