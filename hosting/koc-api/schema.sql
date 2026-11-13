-- phpMyAdmin > u2456160_lo2k1 > SQL sekmesinde bir kez çalıştırın.
-- WordPress tabloları (yw4p_) etkilenmez.

CREATE TABLE IF NOT EXISTS koc_media (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  media_type ENUM('image', 'video') NOT NULL DEFAULT 'image',
  collection VARCHAR(40) NOT NULL DEFAULT 'gallery',
  public_id VARCHAR(255) NOT NULL,
  title VARCHAR(120) NOT NULL,
  alt VARCHAR(255) NOT NULL,
  category VARCHAR(40) NOT NULL,
  width INT UNSIGNED NULL,
  height INT UNSIGNED NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uniq_collection_public_id (collection, public_id),
  KEY idx_collection_published (collection, published, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO koc_media (media_type, collection, public_id, title, alt, category, width, height, sort_order) VALUES
('image', 'gallery', 'koc-makina/cnc-torna-kesim', 'CNC tornada mil işleme', 'CNC tornada kesici uç, çelik mil, ayna ve punta', 'cnc-torna', 2400, 1600, 10),
('image', 'gallery', 'koc-makina/cnc-torna-mil', 'Punta destekli torna', 'Punta destekli CNC tornada işlenen uzun mil', 'cnc-torna', 1600, 1067, 20),
('image', 'gallery', 'koc-makina/torna-detay', 'Talaş detayı', 'Torna kalemi metal çubuğu işlerken oluşan talaş', 'cnc-torna', 1600, 1067, 30),
('image', 'gallery', 'koc-makina/cnc-taret-talas', 'Taret ve takımlar', 'Talaş sıçratan CNC torna tareti ve kesici takımlar', 'cnc-torna', 1600, 1067, 40),
('image', 'gallery', 'koc-makina/cnc-freze-talas', 'Frezeleme anı', 'CNC freze kafası metal parçayı işlerken etrafa saçılan talaş', 'cnc-freze', 2200, 1469, 50),
('image', 'gallery', 'koc-makina/cnc-disli', 'Dişli formu işleme', 'Dişli formundaki metal parçanın üzerinde çalışan ince freze takımı', 'cnc-freze', 1600, 985, 60),
('image', 'gallery', 'koc-makina/hassas-freze', 'İnce takım geçişi', 'Bakır alaşım parçaya inen ince CNC freze takımı', 'cnc-freze', 1600, 1067, 70),
('image', 'gallery', 'koc-makina/motor-blogu', 'Blok yüzey işleme', 'Kapalı kabin içinde işlenen motor bloğu ve soğutma sıvısı', 'uretim', 1600, 2844, 80),
('image', 'gallery', 'koc-makina/karmasik-parca', 'Karmaşık geometri', 'Soğutma sıvısı altında frezelenen karmaşık metal parça', 'parcalar', 1600, 1067, 90),
('image', 'gallery', 'koc-makina/islenmis-govde', 'İşlenmiş gövde', 'Kanalları, dişleri ve delikleri görünen işlenmiş alüminyum gövde', 'parcalar', 1600, 1068, 100),
('image', 'gallery', 'koc-makina/metal-parcalar', 'Tornalanmış parçalar', 'Farklı çaplarda tornalanmış miller ve dişliler', 'parcalar', 1600, 925, 110),
('image', 'gallery', 'koc-makina/hassas-parca', 'Hassas parça', 'Çok sayıda delik içeren parlatılmış hassas metal parça', 'parcalar', 1600, 1068, 120),
('image', 'gallery', 'koc-makina/cnc-torna-taret', 'Takım tareti', 'CNC torna içinde çok istasyonlu takım tareti', 'makine', 1600, 2400, 130),
('image', 'gallery', 'koc-makina/cnc-alin-freze', 'Alın freze', 'Silindirik metal parçanın üzerindeki alın freze kafası', 'cnc-freze', 1600, 900, 140),
('image', 'gallery', 'koc-makina/torna-aynasi', 'Torna aynası', 'Üç ayaklı torna aynası ve iş mili', 'atolye', 1600, 1200, 150);

-- V2 kategori güncellemesi (mevcut kurulumlar için)
UPDATE koc_media SET category = 'cnc-freze'
WHERE collection = 'gallery'
  AND public_id IN ('koc-makina/cnc-freze-talas', 'koc-makina/cnc-disli', 'koc-makina/hassas-freze', 'koc-makina/cnc-alin-freze');
