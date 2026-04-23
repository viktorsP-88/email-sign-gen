const DEFAULT_LOGO_SETTINGS = {
      full: { width: 134, align: 'top' },
      symbol: { width: 100, align: 'top' },
      custom: { width: 134, align: 'top' }
    };

    const DEFAULT_LOGO_COLORS = {
      symbolColor: '#0E142B',
      symbolOpacity: 100,
      wordmarkColor: '#0E142B',
      wordmarkOpacity: 100
    };

    const state = {
      logoMode: 'full',
      logoSettings: JSON.parse(JSON.stringify(DEFAULT_LOGO_SETTINGS)),
      logoColors: { ...DEFAULT_LOGO_COLORS },
      customLogoData: '',
      customLogoNaturalWidth: 0,
      customLogoNaturalHeight: 0
    };

    const els = {
      logoFile: document.getElementById('logoFile'),
      logoMeta: document.getElementById('logoMeta'),
      customLogoBox: document.getElementById('customLogoBox'),
      logoModeInputs: document.querySelectorAll('input[name="logoMode"]'),
      logoFullPreview: document.getElementById('logoFullPreview'),
      logoSymbolPreview: document.getElementById('logoSymbolPreview'),
      logoWidth: document.getElementById('logoWidth'),
      logoSizeInfo: document.getElementById('logoSizeInfo'),
      logoAlignInputs: document.querySelectorAll('input[name="logoAlign"]'),
      logoSymbolColor: document.getElementById('logoSymbolColor'),
      logoSymbolOpacity: document.getElementById('logoSymbolOpacity'),
      logoWordmarkColor: document.getElementById('logoWordmarkColor'),
      logoWordmarkOpacity: document.getElementById('logoWordmarkOpacity'),
      resetLogoDefaultsBtn: document.getElementById('resetLogoDefaultsBtn'),
      previewShell: document.querySelector('.preview-shell'),
      previewDarkToggle: document.getElementById('previewDarkToggle'),
      firstName: document.getElementById('firstName'),
      lastName: document.getElementById('lastName'),
      jobTitle: document.getElementById('jobTitle'),
      phone: document.getElementById('phone'),
      website: document.getElementById('website'),
      address: document.getElementById('address'),
      addressEnabled: document.getElementById('addressEnabled'),
      addressField: document.getElementById('addressField'),
      linkedinUrl: document.getElementById('linkedinUrl'),
      preview: document.getElementById('preview'),
      copyOutlookBtn: document.getElementById('copyOutlookBtn'),
      copyGmailBtn: document.getElementById('copyGmailBtn'),
      copyAppleBtn: document.getElementById('copyAppleBtn'),
      copyStatus: document.getElementById('copyStatus')
    };

    function isValidHex(value = '') {
      return /^#([0-9A-Fa-f]{6})$/.test(String(value).trim());
    }

    function clampOpacity(value) {
      const parsed = parseInt(value, 10);
      if (Number.isNaN(parsed)) return 100;
      return Math.min(100, Math.max(0, parsed));
    }

    function hexToRgb(hex) {
      const cleaned = hex.replace('#', '');
      return {
        r: parseInt(cleaned.slice(0, 2), 16),
        g: parseInt(cleaned.slice(2, 4), 16),
        b: parseInt(cleaned.slice(4, 6), 16)
      };
    }

    function getSafeHex(hex) {
      return isValidHex(hex) ? hex.toUpperCase() : '#0E142B';
    }

    function getSafeOpacity(opacityPercent) {
      return clampOpacity(opacityPercent) / 100;
    }

    function buildDefaultFullLogo() {
      const symbolFill = getSafeHex(state.logoColors.symbolColor);
      const symbolOpacity = getSafeOpacity(state.logoColors.symbolOpacity);
      const wordmarkFill = getSafeHex(state.logoColors.wordmarkColor);
      const wordmarkOpacity = getSafeOpacity(state.logoColors.wordmarkOpacity);
      return "data:image/svg+xml;base64," + btoa(`
<svg width="250" height="85" viewBox="0 0 250 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_61_98" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="250" height="85">
<path d="M250 0H0V84.0453H250V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_61_98)">
<path d="M12.3789 0L0 12.4417V84.0634H63.4967C68.3208 79.2028 71.0333 76.4823 75.8756 71.6216V0H12.3789ZM24.23 72.4559L17.6036 66.5615V36.0375L24.2846 29.3814L43.2717 29.2726V30.1794L37.683 35.9106L25.213 36.0194L25.304 72.4378H24.23V72.4559ZM58.272 43.927L51.5911 50.5831H32.167V49.6763L37.7558 43.9451H50.6626V24.2306H24.3028V17.5744H51.5911L58.272 24.2306V43.9451V43.927Z" fill="${symbolFill}" fill-opacity="${symbolOpacity}"/>
<path d="M124.627 41.8779L118.547 47.9355H101.343V65.9815H94.4258V29.8351L100.506 23.9226H93.5884V17.8649H118.547L124.627 23.9226V41.896V41.8779ZM117.709 41.8779V23.9044H101.362V47.0831L106.459 41.8597H117.709V41.8779Z" fill="${wordmarkFill}" fill-opacity="${wordmarkOpacity}"/>
<path d="M166.078 65.9633L159.998 59.9056V17.8467H166.915V59.9056H183.336V17.8467H190.181V65.9633H166.06H166.078Z" fill="${wordmarkFill}" fill-opacity="${wordmarkOpacity}"/>
<path d="M153.99 60.9395L148.82 66.0903H136.733L130.652 60.0327V17.9738H137.57V60.0327H153.99" fill="${wordmarkFill}" fill-opacity="${wordmarkOpacity}"/>
<path d="M220.2 47.5726H203.051V65.5642H196.152V29.5085L202.214 23.596H195.314V17.5565H220.218V23.596H203.069V46.7202L208.167 41.515H220.236V47.5545L220.2 47.5726Z" fill="${wordmarkFill}" fill-opacity="${wordmarkOpacity}"/>
<path d="M250 47.5726H232.852V65.5642H225.952V29.5085L232.014 23.596H225.115V17.5565H250.018V23.596H232.87V46.7202L237.967 41.515H250.036V47.5545L250 47.5726Z" fill="${wordmarkFill}" fill-opacity="${wordmarkOpacity}"/>
</g>
</svg>`);
    }

    function buildDefaultSymbolLogo() {
      const symbolFill = getSafeHex(state.logoColors.symbolColor);
      const symbolOpacity = getSafeOpacity(state.logoColors.symbolOpacity);
      return "data:image/svg+xml;base64," + btoa(`
<svg width="76" height="85" viewBox="0 0 76 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3789 0L0 12.4417V84.0634H63.4967C68.3208 79.2028 71.0333 76.4823 75.8756 71.6216V0H12.3789ZM24.23 72.4559L17.6036 66.5615V36.0375L24.2846 29.3814L43.2717 29.2726V30.1794L37.683 35.9106L25.213 36.0194L25.304 72.4378H24.23V72.4559ZM58.272 43.927L51.5911 50.5831H32.167V49.6763L37.7558 43.9451H50.6626V24.2306H24.3028V17.5744H51.5911L58.272 24.2306V43.9451V43.927Z" fill="${symbolFill}" fill-opacity="${symbolOpacity}"/>
</svg>`);
    }

    function getActiveLogoData() {
      if (state.logoMode === 'symbol') return buildDefaultSymbolLogo();
      if (state.logoMode === 'custom') return state.customLogoData || buildDefaultFullLogo();
      return buildDefaultFullLogo();
    }


    const demoLinkedin = "data:image/svg+xml;base64," + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <rect width="34" height="34" rx="6" fill="#0A66C2"/>
        <rect x="7" y="13" width="4" height="13" fill="white"/>
        <circle cx="9" cy="9" r="2.2" fill="white"/>
        <path d="M15 13h4v1.8c.9-1.4 2.4-2.3 4.7-2.3 4 0 5.3 2.6 5.3 6.6V26h-4v-6.3c0-1.8-.4-3.6-2.7-3.6-2.3 0-3.3 1.6-3.3 3.5V26h-4z" fill="white"/>
      </svg>
    `);

    function escapeHtml(str = '') {
      return str
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }

    function normalizeUrl(value = '') {
      const trimmed = value.trim();
      if (!trimmed) return '';
      if (/^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed) || /^tel:/i.test(trimmed)) return trimmed;
      return 'https://' + trimmed;
    }

    function onlyDigitsPhone(phone = '') {
      return phone.replace(/[^\d+]/g, '');
    }

    function getActiveLogoSettings() {
      return state.logoSettings[state.logoMode] || DEFAULT_LOGO_SETTINGS.full;
    }

    function getLogoWidth() {
      const settings = getActiveLogoSettings();
      const value = parseInt(settings.width, 10);
      if (Number.isNaN(value)) return 134;
      return Math.min(400, Math.max(20, value));
    }

    function getLogoVerticalAlign() {
      const settings = getActiveLogoSettings();
      return settings.align === 'middle' || settings.align === 'bottom' ? settings.align : 'top';
    }

    function syncLogoColorUi() {
      els.logoSymbolColor.value = state.logoColors.symbolColor;
      els.logoSymbolOpacity.value = clampOpacity(state.logoColors.symbolOpacity);
      els.logoWordmarkColor.value = state.logoColors.wordmarkColor;
      els.logoWordmarkOpacity.value = clampOpacity(state.logoColors.wordmarkOpacity);
    }

    function syncLogoSettingsUi() {
      els.logoWidth.value = getLogoWidth();
      els.logoAlignInputs.forEach(input => {
        input.checked = input.value === getLogoVerticalAlign();
      });
      updateLogoSizeInfo();
    }

    function resetLogoDefaults() {
      state.logoSettings = JSON.parse(JSON.stringify(DEFAULT_LOGO_SETTINGS));
      state.logoColors = { ...DEFAULT_LOGO_COLORS };
      syncLogoSettingsUi();
      syncLogoColorUi();
      render();
    }

    function updateLogoSizeInfo() {
      const width = getLogoWidth();
      const alignMap = { top: 'augšā', middle: 'pa vidu', bottom: 'apakšā' };
      let info = `Pašlaik: ${width} px plats logo, izlīdzinājums ${alignMap[getLogoVerticalAlign()]}.`;

      if (state.logoMode === 'full') {
        info += ' Tiek izmantots noklusējuma pilnais logo.';
      } else if (state.logoMode === 'symbol') {
        info += ' Tiek izmantots tikai “P” simbols.';
      } else if (state.customLogoData) {
        if (state.customLogoNaturalWidth && state.customLogoNaturalHeight) {
          info += ` Augšupielādētā faila oriģinālais izmērs: ${state.customLogoNaturalWidth} × ${state.customLogoNaturalHeight} px.`;
        } else {
          info += ' Tiek izmantots augšupielādētais custom logo.';
        }
      } else {
        info += ' Custom logo vēl nav augšupielādēts.';
      }

      els.logoSizeInfo.textContent = info;
    }

    function buildSignatureHtml() {
      const firstName = els.firstName.value.trim();
      const lastName = els.lastName.value.trim();
      const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Vārds Uzvārds';
      const jobTitle = els.jobTitle.value.trim();
      const phone = els.phone.value.trim();
      const websiteRaw = els.website.value.trim();
      const websiteUrl = normalizeUrl(websiteRaw);
      const websiteLabel = websiteRaw || '';
      const address = els.addressEnabled.checked ? els.address.value.trim() : '';
      const linkedinUrl = normalizeUrl(els.linkedinUrl.value.trim());
      const logoData = getActiveLogoData();
      const logoWidth = getLogoWidth();
      const logoVerticalAlign = getLogoVerticalAlign();

      return `
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="520" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:520px; max-width:520px; font-family:Arial, Helvetica, sans-serif;">
  <tr>
    <td valign="${logoVerticalAlign}" width="140" style="padding:0 20px 0 0; vertical-align:${logoVerticalAlign}; width:140px;">
      <img src="${logoData}" alt="Logo" border="0" width="${logoWidth}" style="display:block; width:${logoWidth}px; max-width:${logoWidth}px; height:auto; border:0; outline:none; text-decoration:none;">
    </td>
    <td width="1" style="width:1px; background-color:#d9deea; font-size:0; line-height:0;">&nbsp;</td>
    <td valign="top" style="padding:0 0 0 20px; vertical-align:top;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
        <tr>
          <td style="padding:0 0 4px 0;">
            <span style="font-family:Arial, Helvetica, sans-serif; font-size:20px; line-height:24px; font-weight:bold; color:#1e2430;">${escapeHtml(fullName)}</span>
          </td>
        </tr>
        ${jobTitle ? `
        <tr>
          <td style="padding:0 0 10px 0;">
            <span style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#5b6472;">${escapeHtml(jobTitle)}</span>
          </td>
        </tr>` : ''}
        ${phone ? `
        <tr>
          <td style="padding:0 0 2px 0;">
            <span style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#5b6472;">T: </span>
            <a href="tel:${escapeHtml(onlyDigitsPhone(phone))}" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#0b57d0; text-decoration:none;">${escapeHtml(phone)}</a>
          </td>
        </tr>` : ''}
        ${websiteLabel ? `
        <tr>
          <td style="padding:0 0 2px 0;">
            <span style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#5b6472;">W: </span>
            <a href="${escapeHtml(websiteUrl)}" target="_blank" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#0b57d0; text-decoration:none;">${escapeHtml(websiteLabel)}</a>
          </td>
        </tr>` : ''}
        ${address ? `
        <tr>
          <td style="padding:0 0 10px 0;">
            <span style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#5b6472;">${escapeHtml(address)}</span>
          </td>
        </tr>` : `
        <tr>
          <td style="padding:0 0 14px 0;"></td>
        </tr>`}
        ${linkedinUrl ? `
        <tr>
          <td style="padding-top:6px;">
            <a href="${escapeHtml(linkedinUrl)}" target="_blank" style="text-decoration:none;">
              <img src="${demoLinkedin}" alt="LinkedIn" border="0" width="28" height="28" style="display:block; width:28px; height:28px; border:0; outline:none; text-decoration:none;">
            </a>
          </td>
        </tr>` : ''}
      </table>
    </td>
  </tr>
</table>`.trim();
    }

    function render() {
      els.logoFullPreview.src = buildDefaultFullLogo();
      els.logoSymbolPreview.src = buildDefaultSymbolLogo();
      els.preview.innerHTML = buildSignatureHtml();
      updateLogoSizeInfo();
    }

    function readFileToDataUrl(file, cb) {
      const reader = new FileReader();
      reader.onload = e => cb(e.target.result || '');
      reader.readAsDataURL(file);
    }

    function handleFile(input, metaEl) {
      const file = input.files && input.files[0];
      if (!file) {
        state.customLogoData = '';
        state.customLogoNaturalWidth = 0;
        state.customLogoNaturalHeight = 0;
        metaEl.textContent = 'Fails nav izvēlēts';
        render();
        return;
      }
      metaEl.textContent = `${file.name} · ${Math.round(file.size / 1024)} KB`;
      readFileToDataUrl(file, (data) => {
        state.customLogoData = data;
        const img = new Image();
        img.onload = () => {
          state.customLogoNaturalWidth = img.naturalWidth || 0;
          state.customLogoNaturalHeight = img.naturalHeight || 0;
          metaEl.textContent = `${file.name} · ${Math.round(file.size / 1024)} KB · ${state.customLogoNaturalWidth} × ${state.customLogoNaturalHeight} px`;
          render();
        };
        img.onerror = () => {
          state.customLogoNaturalWidth = 0;
          state.customLogoNaturalHeight = 0;
          render();
        };
        img.src = data;
      });
    }

    function syncLogoModeUi() {
      els.customLogoBox.style.display = state.logoMode === 'custom' ? 'block' : 'none';
      syncLogoSettingsUi();
    }

    function syncAddressToggleUi() {
      els.addressField.classList.toggle('is-disabled', !els.addressEnabled.checked);
      els.address.disabled = !els.addressEnabled.checked;
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(showToast._timer);
      showToast._timer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2200);
    }

    async function copyHtmlToClipboard() {
      const html = buildSignatureHtml();
      const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (navigator.clipboard && window.ClipboardItem) {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        });
        await navigator.clipboard.write([item]);
        return true;
      }
      return false;
    }

    function copyPreviewSelection() {
      const temp = document.createElement('div');
      temp.style.position = 'fixed';
      temp.style.left = '-9999px';
      temp.innerHTML = buildSignatureHtml();
      document.body.appendChild(temp);

      const range = document.createRange();
      range.selectNodeContents(temp);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      const ok = document.execCommand('copy');
      selection.removeAllRanges();
      document.body.removeChild(temp);
      return ok;
    }

    async function handleCopy(mode) {
      try {
        const ok = await copyHtmlToClipboard();
        if (!ok) {
          const fallbackOk = copyPreviewSelection();
          if (!fallbackOk) throw new Error('copy failed');
        }

        if (mode === 'gmail') {
          els.copyStatus.textContent = 'Paraksts nokopēts Gmail ielīmēšanai.';
          showToast('Paraksts nokopēts Gmail');
        } else if (mode === 'apple') {
          els.copyStatus.textContent = 'Paraksts nokopēts Apple Mail ielīmēšanai.';
          showToast('Paraksts nokopēts Apple Mail');
        } else {
          els.copyStatus.textContent = 'Paraksts nokopēts Outlook ielīmēšanai.';
          showToast('Paraksts nokopēts Outlookam');
        }
      } catch (err) {
        els.copyStatus.textContent = 'Neizdevās automātiski nokopēt. Iekopē preview manuāli.';
        showToast('Neizdevās nokopēt');
      }
    }

    [
      els.firstName,
      els.lastName,
      els.jobTitle,
      els.phone,
      els.website,
      els.address,
      els.linkedinUrl
    ].forEach(el => el.addEventListener('input', render));

    els.logoFile.addEventListener('change', () => handleFile(els.logoFile, els.logoMeta));
    els.logoWidth.addEventListener('input', () => {
      state.logoSettings[state.logoMode].width = els.logoWidth.value;
      render();
    });

    els.logoSymbolColor.addEventListener('input', () => {
      const value = els.logoSymbolColor.value.trim();
      if (isValidHex(value)) {
        state.logoColors.symbolColor = value.toUpperCase();
        render();
      }
    });
    els.logoSymbolColor.addEventListener('blur', () => {
      if (!isValidHex(els.logoSymbolColor.value.trim())) {
        els.logoSymbolColor.value = state.logoColors.symbolColor;
      }
    });

    els.logoWordmarkColor.addEventListener('input', () => {
      const value = els.logoWordmarkColor.value.trim();
      if (isValidHex(value)) {
        state.logoColors.wordmarkColor = value.toUpperCase();
        render();
      }
    });
    els.logoWordmarkColor.addEventListener('blur', () => {
      if (!isValidHex(els.logoWordmarkColor.value.trim())) {
        els.logoWordmarkColor.value = state.logoColors.wordmarkColor;
      }
    });

    els.logoSymbolOpacity.addEventListener('input', () => {
      state.logoColors.symbolOpacity = clampOpacity(els.logoSymbolOpacity.value);
      render();
    });
    els.logoWordmarkOpacity.addEventListener('input', () => {
      state.logoColors.wordmarkOpacity = clampOpacity(els.logoWordmarkOpacity.value);
      render();
    });

    els.previewDarkToggle.addEventListener('change', () => {
      els.previewShell.classList.toggle('preview-dark', els.previewDarkToggle.checked);
    });
    els.logoAlignInputs.forEach(el => el.addEventListener('change', () => {
      if (!el.checked) return;
      state.logoSettings[state.logoMode].align = el.value;
      render();
    }));
    els.logoModeInputs.forEach(el => el.addEventListener('change', () => {
      if (!el.checked) return;
      state.logoMode = el.value;
      syncLogoModeUi();
      render();
    }));
    els.resetLogoDefaultsBtn.addEventListener('click', resetLogoDefaults);
    els.addressEnabled.addEventListener('change', () => {
      syncAddressToggleUi();
      render();
    });
    els.copyOutlookBtn.addEventListener('click', () => handleCopy('outlook'));
    els.copyGmailBtn.addEventListener('click', () => handleCopy('gmail'));
    els.copyAppleBtn.addEventListener('click', () => handleCopy('apple'));

    syncAddressToggleUi();
    syncLogoModeUi();
    syncLogoColorUi();
    render();
